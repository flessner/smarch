<script>
  import { Layout, Row } from "../layout";
  import { Button } from "../atomic";

  export let label = "";
  export let description = "";
  export let button = "";
</script>

<Layout class="mb-8">
  <h3>{label}</h3>
  <Row class="justify-between">
    <p class="my-auto">{description}</p>
    <Button primary label={button} />
  </Row>
</Layout>
