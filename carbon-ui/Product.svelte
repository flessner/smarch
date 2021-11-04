<script>
  import { Layout, Row, Button } from "./main";

  export let label = "";
  export let description = "";
  export let button = "";
</script>

<Layout class="mb-8">
  <h3>{label}</h3>
  {#if description}
    <Row class="justify-between">
      <p class="my-auto">{description}</p>
      <Button primary label={button} />
    </Row>
  {/if}
</Layout>
