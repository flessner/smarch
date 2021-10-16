<script>
  import { authenticated } from "../../store";
  import { Title, Layout } from "carbon-ui";
</script>

<Title simple title="Ceramic CMS" />
<Layout>
  <blockquote>Ceramic CMS is the perfect fit for your Blog!</blockquote>
  <h2>Blogs</h2>
  {#if !$authenticated}
    <p>Please Login.</p>
  {:else}
    <p>Let's go!</p>
  {/if}
</Layout>
