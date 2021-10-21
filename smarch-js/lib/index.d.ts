import { TileDocument } from '@ceramicnetwork/stream-tile';
import CeramicClient from '@ceramicnetwork/http-client';
interface Blog {
    id: string;
    title: string;
    posts: Array<string>;
}
interface Post {
    id: string;
    title: string;
    text: string;
    created: string;
    modified: string;
}
export declare class CeramicCMS {
    private ceramic;
    constructor(ceramic: CeramicClient);
    getIndex(): Promise<TileDocument<unknown>>;
    getIndexId(): Promise<string>;
    getBlog(id: string): Promise<Blog>;
    createBlog(title: string): Promise<void>;
    deleteBlog(id: string): Promise<void>;
    getPost(id: string): Promise<Post>;
    createPost(blog: Blog, title: string, text: string): Promise<void>;
    deletePost(blog: Blog, id: string): Promise<void>;
}
export {};
