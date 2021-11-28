<script>
  import { Layout, Row } from "carbon/svelte";

  import ArrowUpRight24 from "carbon-icons-svelte/lib/ArrowUpRight24";

  const projects = [
    {
      label: "Cloud",
      href: "https://cloud.smarch.net",
    },
    {
      label: "Explorer",
      href: "https://scan.smarch.net",
    },
  ];
</script>

<div class="bg-primary overflow-hidden">
  <Layout invert class="h-64 flex flex-col justify-center">
    <h1 class="text-ui-l0">Blockchain.<br />Revolution.<br />Now.</h1>
  </Layout>
</div>

<Layout>
  <h2>Projects</h2>
  {#each projects as project}
    <a href={project.href}>
      <Row class="h-16 mb-4 bg-ui-l1 rounded-lg justify-between">
        <h3 class="py-0 px-4 my-auto">{project.label}</h3>
        <ArrowUpRight24 class="mr-4 my-auto text-ui-d0" />
      </Row>
    </a>
  {/each}
</Layout>
