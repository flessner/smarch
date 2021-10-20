import { TileDocument } from '@ceramicnetwork/stream-tile'
import CeramicClient from '@ceramicnetwork/http-client'

interface Blog {
  id: string
  title: string
  posts: Array<string>
}

interface Post {
  id: string
  title: string
  text: string
  created: string
  modified: string
}

export class CeramicCMS {
  private ceramic: CeramicClient

  constructor(ceramic: CeramicClient) {
    this.ceramic = ceramic;
  }

  async getIndex() {
    const index = await TileDocument.load(
      this.ceramic,
      await this.getIndexId()
    )
    return index
  }

  async getIndexId() {
    const index = await TileDocument.create(
      this.ceramic,
      null,
      {
        controllers: [this.ceramic.did.id],
        family: 'blogs',
        deterministic: true
      },
      { publish: false, anchor: false }
    )

    return index.id.toString()
  }

  async getBlog(id: string): Promise<Blog> {
    const blog = await TileDocument.load(
      this.ceramic,
      id
    )

    return {
      id: blog.id.toString(),
      title: (blog.content as any).title as string,
      posts: (blog.content as any).posts as Array<string>
    }
  }

  async createBlog(title: string) {
    const index = await this.getIndex()
    const blog = await TileDocument.create(
      this.ceramic,
      { title: title, posts: [] },
      {
        controllers: [this.ceramic.did.id],
        family: 'blog',
      },
      { pin: true }
    )

    let blogs = index.content as Array<string>
    await index.update([...blogs, blog.id.toString()])
  }

  async deleteBlog(id: string, indexId: string) {
    const index = await this.getIndex()
    const blog = await TileDocument.load(
      this.ceramic,
      id
    )
    let blogs = index.content as Array<string>
    blogs = [...blogs].filter((element) => {
      return element != blog.id.toString()
    })

    await index.update(blogs)
    await blog.update({}, { family: "", tags: [] })
  }

  async getPost(id: string): Promise<Post> {
    const post = await TileDocument.load(
      this.ceramic,
      id
    )

    return {
      id: post.id.toString(),
      title: (post.content as any).title as string,
      text: (post.content as any).text as string,
      created: (post.content as any).created as string,
      modified: (post.content as any).modified as string,
    }
  }

  async createPost(blog: Blog, title: string, text: string) {
    const blogDocument = await TileDocument.load(
      this.ceramic,
      blog.id
    )
    const post = await TileDocument.create(
      this.ceramic,
      { title: title, text: text },
      {
        controllers: [this.ceramic.did.id],
        family: 'blogPost',
      },
      { pin: true }
    )

    let posts = blogDocument.content as Array<string>
    await blogDocument.update([...posts, post.id.toString()])
  }

  async deletePost(id: string, blogId: string) {

  }
}

