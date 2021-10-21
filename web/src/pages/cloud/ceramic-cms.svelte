<script>
  import { authenticated, ceramic, self } from "../../stores/ceramic";
  import {
    blogs,
    createBlog,
    createPost,
    deleteBlog,
    blogCreateQueue,
    blogDeleteQueue,
    postCreateQueue,
    postDeleteQueue,
    getPost,
    deletePost,
    getBlog,
    updatePost,
  } from "../../stores/ceramic-cms";
  import {
    Layout,
    Table,
    Utility,
    Remark,
    TableRow,
    Row,
    Modal,
    Title,
    Button,
    HeaderLink,
  } from "carbon-ui";
  import { get, writable } from "svelte/store";
  import Markdown from "../../comp/Markdown.svelte";
  import * as dayjs from "dayjs";

  import Add24 from "carbon-icons-svelte/lib/Add24";
  import DataViewAlt20 from "carbon-icons-svelte/lib/DataViewAlt20";
  import Delete20 from "carbon-icons-svelte/lib/Delete20";
  import Copy20 from "carbon-icons-svelte/lib/Copy20";
  import Pen20 from "carbon-icons-svelte/lib/Pen20";

  // Posts Tab
  let posts = writable([]);
  let selectedBlog = writable(undefined);
  async function updatePosts() {
    if ($selectedBlog) {
      let docs = [];
      let blog = await getBlog($selectedBlog.id);
      blog.posts.forEach((el) => {
        docs.push(getPost(el));
      });
      posts.set((await Promise.all(docs)) || []);
    } else {
      posts.set([]);
    }
  }
  selectedBlog.subscribe(() => {
    updatePosts();
  });
  blogs.subscribe((blogList) => {
    if ($selectedBlog) {
      for (let i in blogList) {
        if (blogList[i].id == $selectedBlog.id) {
          selectedBlog.set(blogList[i]);
        }
      }
    }
  });

  authenticated.subscribe(() => {
    selectedBlog.set(undefined);
  });

  // Create Blog Modal
  let createBlogOpen = false;
  let createBlogName = writable("");
  function createBlogSubmit() {
    createBlog($createBlogName);
    createBlogName.set("");
    createBlogOpen = false;
  }

  // Delete Blog Modal
  let deleteBlogOpen = false;
  let deleteBlogData = writable(undefined);
  function deleteBlogSubmit() {
    deleteBlog($deleteBlogData.id);
    deleteBlogData.set(undefined);
    deleteBlogOpen = false;
  }

  // Create Post Modal
  let createPostOpen = false;
  let createPostTitle = writable("");
  let createPostText = writable("");
  function createPostSubmit() {
    createPost($selectedBlog, $createPostTitle, $createPostText);
    createPostTitle.set("");
    createPostText.set("");
    createPostOpen = false;
  }

  // Edit Post Modal
  let editPostOpen = false;
  let editPostId = writable(undefined);
  let editPostTitle = writable("");
  let editPostText = writable("");
  function editPostSubmit() {
    updatePost($editPostId, $editPostTitle, $editPostText);
    editPostId.set(undefined);
    editPostTitle.set("");
    editPostText.set("");
    editPostOpen = false;
  }

  // Delete Post Modal
  let deletePostOpen = false;
  let deletePostData = writable(undefined);
  function deletePostSubmit() {
    deletePost($selectedBlog, $deletePostData.id);
    deletePostData.set(undefined);
    deletePostOpen = false;
  }

  // Change Blog Modal
  let changeBlogOpen = false;

  let openTab;
</script>

<!-- Create Blog Modal -->
<Modal
  cancel
  submit
  label="Create Blog"
  narrow
  bind:modalOpen={createBlogOpen}
  onSubmit={createBlogSubmit}
>
  <input type="text" bind:value={$createBlogName} placeholder="Blog Name" />
</Modal>

<!-- Delete Blog Modal -->
<Modal
  cancel
  del
  label="Delete Blog"
  narrow
  bind:modalOpen={deleteBlogOpen}
  onDel={deleteBlogSubmit}
  onClose={deleteBlogData.set(undefined)}
>
  <p>Are you sure, that you want to delete {$deleteBlogData.title}?</p>
</Modal>

<!-- Create Post -->
<Modal
  cancel
  wide
  submit
  label="Create Post"
  bind:modalOpen={createPostOpen}
  onSubmit={createPostSubmit}
>
  <input type="text" bind:value={$createPostTitle} placeholder="Post Title" />
  <Markdown bind:value={$createPostText} />
</Modal>

<!-- Edit Post -->
<Modal
  cancel
  wide
  submit
  label="Edit Post"
  bind:modalOpen={editPostOpen}
  onSubmit={editPostSubmit}
  onClose={() => {
    editPostId.set(undefined);
    editPostText.set("");
    editPostTitle.set("");
  }}
>
  <input type="text" bind:value={$editPostTitle} placeholder="Post Title" />
  <Markdown bind:value={$editPostText} />
</Modal>

<!-- Delete Post Modal -->
<Modal
  cancel
  del
  label="Delete Post"
  narrow
  bind:modalOpen={deletePostOpen}
  onDel={deletePostSubmit}
  onClose={deletePostData.set(undefined)}
>
  <p>Are you sure, that you want to delete {$deletePostData.title}?</p>
</Modal>

<!-- Change Blog -->
<Modal narrow label="Change Blog" bind:modalOpen={changeBlogOpen}>
  {#if $blogs}
    {#each $blogs as blog}
      <p
        on:click={() => {
          selectedBlog.set(blog);
          changeBlogOpen = false;
        }}
        class="py-2 cursor-pointer select-none"
      >
        {blog.title}
      </p>
    {/each}
  {/if}
</Modal>

<!-- Main Site -->
<Title simple tabs={["Blogs", "Posts"]} bind:openTab title="Ceramic CMS" />
<Layout>
  <div class="h-16" />
  {#if !$authenticated}
    <Remark label="Please login." />
  {:else if openTab == "Blogs"}
    <!-- Blogs Tab -->
    <Table heading={["Name", "ID", "Posts", ""]} title="Blogs">
      <div slot="utilities">
        <Utility
          primary
          icon={Add24}
          onClick={() => {
            createBlogOpen = true;
          }}
        />
      </div>
      {#if $blogs}
        {#each $blogs as blog}
          <!-- Blog Row -->
          <TableRow>
            <td>{blog.title}</td>
            {#if $blogDeleteQueue.indexOf(blog.id) == -1}
              <Row>
                <Utility
                  small
                  icon={Copy20}
                  onClick={() => {
                    navigator.clipboard.writeText(blog.id);
                  }}
                />
                <td class="mt-3 -ml-4">
                  {"..." + blog.id.slice(-10)}
                </td>
              </Row>
              {#if blog.posts}
                <td>{blog.posts.length}</td>
              {:else}
                <td>-</td>
              {/if}
              <Row class="justify-end">
                <Utility
                  small
                  icon={DataViewAlt20}
                  onClick={() => {
                    selectedBlog.set(blog);
                    openTab = "Posts";
                  }}
                />
                <Utility
                  small
                  danger
                  icon={Delete20}
                  onClick={() => {
                    deleteBlogData.set(blog);
                    deleteBlogOpen = true;
                  }}
                />
              </Row>
            {:else}
              <td class="text-danger italic">Removing...</td>
              <td />
              <td />
            {/if}
          </TableRow>
        {/each}
      {/if}
      {#each $blogCreateQueue as title}
        <TableRow>
          <td>{title}</td>
          <td class="text-primary italic">Creating...</td>
          <td />
          <td />
        </TableRow>
      {/each}
    </Table>
    {#if !$blogs.length}
      <div
        class="h-24 w-full bg-ui-d1 border-b border-r border-l border-ui-d2"
      />
    {/if}
  {:else}
    <!-- Posts Tab -->
    {#if $blogs && $selectedBlog}
      <Table
        title={$selectedBlog.title}
        heading={["Title", "ID", "Created", "Modified", ""]}
      >
        <Row slot="utilities">
          <HeaderLink
            label="Change Blog"
            onClick={() => {
              changeBlogOpen = true;
            }}
          />
          <Utility
            primary
            icon={Add24}
            onClick={() => {
              createPostOpen = true;
            }}
          />
        </Row>
        {#if $posts}
          {#each $posts as post}
            <!-- Post Row -->
            <TableRow>
              <td>{post.title}</td>
              {#if $postDeleteQueue.indexOf(post.id) == -1}
                <Row>
                  <Utility
                    small
                    icon={Copy20}
                    onClick={() => {
                      navigator.clipboard.writeText(post.id);
                    }}
                  />
                  <td class="mt-3 -ml-4">
                    {"..." + post.id.slice(-10)}
                  </td>
                </Row>
                <td>{dayjs(post.created).format("MMMM D, YYYY h:mm A")}</td>
                <td>{dayjs(post.modified).format("MMMM D, YYYY h:mm A")}</td>
                <Row class="justify-end">
                  <Utility
                    small
                    icon={Pen20}
                    onClick={() => {
                      editPostTitle.set(post.title);
                      editPostText.set(post.text);
                      editPostId.set(post.id);
                      editPostOpen = true;
                    }}
                  />
                  <Utility
                    small
                    danger
                    icon={Delete20}
                    onClick={() => {
                      deletePostData.set(post);
                      deletePostOpen = true;
                    }}
                  />
                </Row>
              {:else}
                <td class="text-danger italic">Removing...</td>
                <td />
                <td />
                <td />
              {/if}
            </TableRow>
          {/each}
        {/if}
        {#each $postCreateQueue as title}
          <TableRow>
            <td>{title}</td>
            <td class="text-primary italic">Creating...</td>
            <td />
            <td />
            <td />
          </TableRow>
        {/each}
      </Table>
      {#if !$posts[0]}
        <div
          class="h-24 w-full bg-ui-d1 border-b border-r border-l border-ui-d2"
        />
      {/if}
    {:else}
      <Row>
        <Button
          primary
          label="Select Blog"
          onClick={() => {
            changeBlogOpen = true;
          }}
        />
      </Row>
    {/if}
  {/if}
</Layout>
