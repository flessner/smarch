<script>
  import { Layout, Row, Button } from "../svelte";

  export let label;
  export let description = undefined;
  export let button = undefined;
  export let onClick = () => {};
</script>

<Layout class="mb-4">
  <Row class="justify-between flex-wrap">
    <h3 class="mr-8">{label}</h3>
    {#if button}
      <Button primary label={button} on:click={onClick} class="mt-auto mb-4" />
    {/if}
  </Row>
  {#if description}
    <p class="mb-4">{description}</p>
  {/if}
</Layout>
