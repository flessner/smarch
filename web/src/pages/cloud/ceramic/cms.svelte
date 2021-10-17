<script>
  import { authenticated, self } from "../../store";
  import { Layout } from "carbon-ui";
</script>

<!-- routify:options title="Ceramic CMS" -->

<Layout>
  <h2>Blogs</h2>
  {#if !$authenticated}
    <p>Please Login.</p>
  {:else}
    <p>Let's go!</p>
  {/if}
</Layout>
