<script>
  import { Layout, Row, Button } from "../svelte";

  export let label;
  export let description = undefined;
  export let button = "";
</script>

<Layout class="mb-8">
  <Row class="justify-between flex-wrap">
    <h3 class="mr-8">{label}</h3>
    <Button primary label={button} class="mt-auto mb-4" />
  </Row>
  {#if description}
    <p>{description}</p>
  {/if}
</Layout>
