import { TileDocument } from '@ceramicnetwork/stream-tile'
import { writable, get } from 'svelte/store'
import { self, authenticated, ceramic } from './ceramic'

export const blogs = writable([])
function loadBlogsDoc() {
  return TileDocument.create(
    get(ceramic),
    null,
    {
      controllers: [get(ceramic).did.id],
      family: 'blogs',
      deterministic: true
    },
    { publish: false, anchor: false }
  )
}

authenticated.subscribe(async (auth) => {
  if (auth) {
    const doc = await loadBlogsDoc()

    doc.subscribe(async () => {
      blogs.set([])
      if (doc.content) {
        let docs = []
        doc.content.forEach((el) => {
          docs.push(TileDocument.load(get(ceramic), el))
        })
        let data = await Promise.all(docs)
        blogs.set(data)
      }
    })

    if (doc.content === null) {
      await doc.update([], doc.metadata, { pin: true })
    }
  } else {
    blogs.set(undefined)
  }
})

export async function createBlog(title) {
  const blog = await TileDocument.create(
    get(ceramic),
    { title: title, posts: [] },
    {
      controllers: [get(ceramic).did.id],
      family: 'blog',
    },
    { pin: true }
  )
  let blogsDoc = await loadBlogsDoc()
  blogsDoc.update([...blogsDoc.content, blog.id.toString()])
}

export async function deleteBlog(id) {
  const blog = await TileDocument.load(
    get(ceramic),
    id
  )
  let blogsDoc = await loadBlogsDoc()
  let blogList = [...blogsDoc.content].filter((el) => { return el != blog.id.toString() })
  blogsDoc.update(blogList)
  blog.update({}, { family: undefined, tags: [] })
}
