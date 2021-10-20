import { TileDocument } from '@ceramicnetwork/stream-tile';
import CeramicClient from '@ceramicnetwork/http-client';
interface Blog {
    id: string;
    title: string;
    posts: Array<string>;
}
export declare class CeramicCMS {
    private ceramic;
    constructor(ceramic: CeramicClient);
    getIndex(): Promise<TileDocument<unknown>>;
    getIndexId(): Promise<string>;
    getBlog(id: string): Promise<Blog>;
    createBlog(title: string): Promise<void>;
    deleteBlog(id: string, indexId: string): Promise<void>;
    getPost(id: string): Promise<void>;
    createPost(blog: Blog, title: string, text: string): Promise<void>;
    deletePost(id: string, blogId: string): Promise<void>;
}
export {};
