<script>
  import { Title, Layout } from "carbon-ui";
  import { writable } from "svelte/store";
  export let scoped;
  let { cms } = scoped;

  let blog = writable(undefined);
  let posts = writable([]);

  async function loadData() {
    const blogData = await cms.getBlog(
      "kjzl6cwe1jw149k2xi16yq2xjgagl636qfs4ur3tfxncl0701uxbhofy1g8am9h"
    );
    blog.set(blogData);

    const postsData = [];
    blogData.posts.forEach((ref) => {
      postsData.push(cms.getPost(ref));
    });
    posts.set(await Promise.all(postsData));
  }

  loadData();
</script>

<Title simple title="Smarch Blog" />
<Layout text>
  <h2>All Posts</h2>
  {#each $posts as post}
    <a href={"/blog/" + post.id}>
      <h4>{post.title}</h4>
      <p>{post.text.slice(0, 80) + "..."}</p>
    </a>
  {/each}
</Layout>
