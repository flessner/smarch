import { TileDocument } from '@ceramicnetwork/stream-tile'
import { writable, get } from 'svelte/store'
import { self, authenticated, ceramic } from './ceramic'
import { CeramicCMS } from "smarch-js";

export const blogs = writable([])
export const cms = writable(undefined)

async function updateBlogs() {
  if (get(cms)) {
    const index = await get(cms).getIndex()
    if (index.content) {
      let docs = []
      index.content.forEach((el) => {
        docs.push(get(cms).getBlog(el))
      })
      blogs.set(await Promise.all(docs))
    } else {
      blogs.set([])
    }
  }
}

authenticated.subscribe(async (auth) => {
  if (auth) {
    cms.set(new CeramicCMS(get(ceramic)))
    const index = get(cms).getIndex()

    if (index.content === null) {
      await index.update([], index.metadata, { pin: true })
    }

    updateBlogs()
  } else {
    cms.set(undefined)
    blogs.set([])
  }
})

export async function createBlog(title) {
  if (get(cms)) {
    get(cms).createBlog(title).then(() => {
      updateBlogs()
    })
  }
}

export async function deleteBlog(id) {
  if (get(cms)) {
    get(cms).deleteBlog(id, await get(cms).getIndexId()).then(() => {
      updateBlogs()
    })
  }
}

export async function createPost(blog, title, body) {
  if (get(cms)) {
    get(cms).createPost(blog, title, body).then(() => {
      updateBlogs()
    })
  }
}
