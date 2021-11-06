"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CeramicCMS = void 0;
const stream_tile_1 = require("@ceramicnetwork/stream-tile");
const dayjs = __importStar(require("dayjs"));
const utc_1 = __importDefault(require("dayjs/plugin/utc"));
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
            if (typeof blogs[Symbol.iterator] === "function") {
                yield index.update([...blogs, blog.id.toString()]);
            }
            else {
                yield index.update([]);
                yield index.update([blog.id.toString()]);
            }
        });
    }
    deleteBlog(id) {
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
            const post = yield stream_tile_1.TileDocument.load(this.ceramic, id);
            return {
                id: post.id.toString(),
                title: post.content.title,
                text: post.content.text,
                created: post.content.created,
                modified: post.content.modified,
            };
        });
    }
    createPost(blog, title, text) {
        return __awaiter(this, void 0, void 0, function* () {
            const blogDocument = yield stream_tile_1.TileDocument.load(this.ceramic, blog.id);
            const post = yield stream_tile_1.TileDocument.create(this.ceramic, { title: title, text: text, created: dayjs.extend(utc_1.default).utc().format(), modified: dayjs.extend(utc_1.default).utc().format() }, {
                controllers: [this.ceramic.did.id],
                family: 'blogPost',
            }, { pin: true });
            let posts = blogDocument.content.posts;
            if (typeof posts[Symbol.iterator] === "function") {
                yield blogDocument.update({ title: blogDocument.content.title, posts: [...posts, post.id.toString()] });
            }
            else {
                yield blogDocument.update({ title: blogDocument.content.title, posts: [] });
                yield blogDocument.update({ title: blogDocument.content.title, posts: [post.id.toString()] });
            }
        });
    }
    updatePost(id, title, text) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield stream_tile_1.TileDocument.load(this.ceramic, id);
            yield post.update({ title: title, text: text, created: post.content.created, modified: dayjs.extend(utc_1.default).utc().format() });
        });
    }
    deletePost(blog, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const blogDocument = yield stream_tile_1.TileDocument.load(this.ceramic, blog.id);
            const post = yield stream_tile_1.TileDocument.load(this.ceramic, id);
            let posts = blogDocument.content.posts;
            posts = [...posts].filter((element) => {
                return element != id;
            });
            yield blogDocument.update({ id: blog.id, title: blog.title, posts: posts });
            yield post.update({}, { family: "", tags: [] });
        });
    }
}
exports.CeramicCMS = CeramicCMS;
