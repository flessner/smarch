<script>
  import { Title, Layout } from "carbon-ui";
  import MarkdownIt from "markdown-it";

  export let postId;
  export let scoped;
  let { cms } = scoped;

  let md = new MarkdownIt();
</script>

{#await cms.getPost(postId)}
  <Title simple title="Loading..." />
{:then post}
  <Title simple title={post.title} />
  <Layout text class="mb-32">
    {@html md.render(post.text)}
  </Layout>
{/await}
