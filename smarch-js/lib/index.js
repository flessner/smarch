"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CeramicCMS = void 0;
const stream_tile_1 = require("@ceramicnetwork/stream-tile");
class CeramicCMS {
    constructor(ceramic) {
        this.ceramic = ceramic;
    }
    getIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            const index = yield stream_tile_1.TileDocument.load(this.ceramic, yield this.getIndexId());
            return index;
        });
    }
    getIndexId() {
        return __awaiter(this, void 0, void 0, function* () {
            const index = yield stream_tile_1.TileDocument.create(this.ceramic, null, {
                controllers: [this.ceramic.did.id],
                family: 'blogs',
                deterministic: true
            }, { publish: false, anchor: false });
            return index.id.toString();
        });
    }
    getBlog(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const blog = yield stream_tile_1.TileDocument.load(this.ceramic, id);
            return {
                id: blog.id.toString(),
                title: blog.content.title,
                posts: blog.content.posts
            };
        });
    }
    createBlog(title) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = yield this.getIndex();
            const blog = yield stream_tile_1.TileDocument.create(this.ceramic, { title: title, posts: [] }, {
                controllers: [this.ceramic.did.id],
                family: 'blog',
            }, { pin: true });
            let blogs = index.content;
            yield index.update([...blogs, blog.id.toString()]);
        });
    }
    deleteBlog(id, indexId) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = yield this.getIndex();
            const blog = yield stream_tile_1.TileDocument.load(this.ceramic, id);
            let blogs = index.content;
            blogs = [...blogs].filter((element) => {
                return element != blog.id.toString();
            });
            yield index.update(blogs);
            yield blog.update({}, { family: "", tags: [] });
        });
    }
    getPost(id) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    createPost(blog, title, text) {
        return __awaiter(this, void 0, void 0, function* () {
            const blogDocument = yield stream_tile_1.TileDocument.load(this.ceramic, blog.id);
            const post = yield stream_tile_1.TileDocument.create(this.ceramic, { title: title, text: text }, {
                controllers: [this.ceramic.did.id],
                family: 'blogPost',
            }, { pin: true });
            let posts = blogDocument.content;
            yield blogDocument.update([...posts, post.id.toString()]);
        });
    }
    deletePost(id, blogId) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.CeramicCMS = CeramicCMS;
