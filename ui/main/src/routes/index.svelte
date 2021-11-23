<script>
  import "virtual:windi.css";
  import "carbon/smarch.css";
  import { Layout, Row } from "carbon/svelte";
  import ArrowUpRight24 from "carbon-icons-svelte/lib/ArrowUpRight24";
</script>

<Layout class="h-64 flex flex-col justify-center bg-primary">
  <h1 class="text-ui-l0">Blockchain.<br />Revolution.<br />Now.</h1>
</Layout>

<Layout>
  <h2>Projects</h2>
  <a href="https://treasury.smarch.net">
    <Row class="h-16 mb-4 bg-ui-d0 rounded justify-between">
      <h3 class="py-0 px-4 my-auto text-ui-l0">Treasury</h3>
      <ArrowUpRight24 class="mr-4 my-auto text-ui-l0" />
    </Row>
  </a>
  <a href="https://cloud.smarch.net">
    <Row class="h-16 my-4 bg-ui-d0 rounded justify-between">
      <h3 class="py-0 px-4 my-auto text-ui-l0">Cloud</h3>
      <ArrowUpRight24 class="mr-4 my-auto text-ui-l0" />
    </Row>
  </a>
  <a href="https://treasury.smarch.net">
    <Row class="h-16 my-4 bg-ui-d0 rounded justify-between">
      <h3 class="py-0 px-4 my-auto text-ui-l0">Explorer</h3>
      <ArrowUpRight24 class="mr-4 my-auto text-ui-l0" />
    </Row>
  </a>
</Layout>
