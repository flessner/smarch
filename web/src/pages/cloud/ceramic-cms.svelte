<script>
  import { authenticated, ceramic, self } from "../../stores/ceramic";
  import {
    blogs,
    createBlog,
    createPost,
    deleteBlog,
  } from "../../stores/ceramic-cms";
  import { TileDocument } from "@ceramicnetwork/stream-tile";
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

  import Add24 from "carbon-icons-svelte/lib/Add24";
  import DataViewAlt20 from "carbon-icons-svelte/lib/DataViewAlt20";
  import Delete20 from "carbon-icons-svelte/lib/Delete20";
  import Copy20 from "carbon-icons-svelte/lib/Copy20";

  // Posts Tab
  let posts = writable([]);
  let selectedBlog = writable(undefined);
  selectedBlog.subscribe(async (blog) => {
    if (blog) {
      let posts = [];
      // blog.posts.forEach((el) => {
      //   docs.push(TileDocument.load(get(ceramic), el));
      // });
      // posts.set((await Promise.all(docs)) || []);
    } else {
      posts.set([]);
    }
  });
  posts.subscribe((p) => {
    console.log(p);
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
  <input type="text" bind:value={$createBlogName} placeholder="Post Title" />
  <Markdown />
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
            <Row>
              <Utility
                small
                icon={Copy20}
                onClick={() => {
                  navigator.clipboard.writeText(blog.id.toString());
                }}
              />
              <td class="truncate mt-3 -ml-4">
                {"..." + blog.id.toString().slice(-10)}
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
          </TableRow>
        {/each}
      {/if}
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
        <!-- Post Row -->
        <Row slot="utilities">
          <HeaderLink label="Change Blog" />
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
            <TableRow>
              <td>{post.content.title}</td>
            </TableRow>
          {/each}
        {/if}
      </Table>
      {#if !$posts[0]}
        <div
          class="h-24 w-full bg-ui-d1 border-b border-r border-l border-ui-d2"
        />
      {/if}
    {:else}
      <Row>
        <Button primary label="Select Blog" />
      </Row>
    {/if}
  {/if}
</Layout>
