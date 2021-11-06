<script>
  import { Layout, Row } from "../svelte";

  export let label;
  export let changer = "";
  export let changerHref = undefined;
</script>

<Layout>
  <Row class="justify-between">
    <h2>{label}</h2>
    <p class="mt-auto mb-4 cursor-pointer select-none">
      <a href={changerHref}>{changer}</a>
    </p>
  </Row>
</Layout>
