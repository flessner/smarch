import { writable, get } from 'svelte/store'
import { self, authenticated, ceramic } from './ceramic'
import { CeramicCMS } from "smarch-js";

export const blogs = writable([])
export const cms = writable(undefined)

export const blogDeleteQueue = writable([])
export const blogCreateQueue = writable([])

export const postDeleteQueue = writable([])
export const postCreateQueue = writable([])

async function updateBlogs() {
  if (get(cms)) {
    const index = await get(cms).getIndex()
    if (index.content && index.content.length > -1) {
      let docs = []
      index.content.forEach((el) => {
        docs.push(get(cms).getBlog(el))
      })
      blogs.set(await Promise.all(docs))
    } else {
      blogs.set([])

      blogDeleteQueue.set([])
      blogCreateQueue.set([])
      postDeleteQueue.set([])
      postCreateQueue.set([])
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

    blogDeleteQueue.set([])
    blogCreateQueue.set([])
    postDeleteQueue.set([])
    postCreateQueue.set([])
  }
})

export async function getBlog(id) {
  if (get(cms)) {
    return get(cms).getBlog(id)
  }
}

export async function createBlog(title) {
  if (get(cms)) {
    get(cms).createBlog(title).then(() => {
      updateBlogs()
      blogCreateQueue.set(get(blogCreateQueue).filter((el) => { return el != title }))
    })
    blogCreateQueue.set([...get(blogCreateQueue), title])
  }
}

export async function deleteBlog(id) {
  if (get(cms)) {
    get(cms).deleteBlog(id, await get(cms).getIndexId()).then(() => {
      updateBlogs()
    })
    blogDeleteQueue.set([...get(blogDeleteQueue), id])
  }
}

export async function getPost(id) {
  if (get(cms)) {
    return get(cms).getPost(id)
  }
}

export async function updatePost(id, title, text) {
  if (get(cms)) {
    get(cms).updatePost(id, title, text).then(() => {
      updateBlogs()
    })
  }
}

export async function createPost(blog, title, text) {
  if (get(cms)) {
    get(cms).createPost(blog, title, text).then(() => {
      updateBlogs()
      postCreateQueue.set(get(postCreateQueue).filter((el) => { return el != title }))
    })
    postCreateQueue.set([...get(postCreateQueue), title])
  }
}

export async function deletePost(blog, id) {
  if (get(cms)) {
    get(cms).deletePost(blog, id).then(() => {
      updateBlogs()
    })
    postDeleteQueue.set([...get(postDeleteQueue), id])
  }
}
