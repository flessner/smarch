<script>
  import { Layout, Row } from "carbon/svelte";

  import ArrowUpRight24 from "carbon-icons-svelte/lib/ArrowUpRight24";

  const working = [
    {
      label: "DeviantDAO",
      href: "https://deviant.finance",
    },
  ];
</script>

<div class="bg-primary overflow-hidden">
  <Layout invert class="h-64 flex flex-col justify-center">
    <h1 class="text-ui-l0">Making a<br />Difference<br />for Web3.</h1>
  </Layout>
</div>

<Layout class="pb-8">
  <Layout narrow class="-ml-4 md:-ml-8">
    <h2>Mission</h2>
    <blockquote>
      Building a better tomorrow by building better tools today.
    </blockquote>
    <p class="pt-8">
      smarch is a community of developers and designers who are passionate about
      the web3 ecosystem. We believe that the web3 ecosystem is the future of
      the web and we want to make it a reality.
      <br /><br />
      The web3 ecosystem is a huge opportunity for developers to build more open,
      efficient and beautiful tools.
      <br /><br />
      However, the gas prices are high, the security is low, the scalability is low,
      the interoperability is low, and the ecosystem is still in its infancy. We
      are hoping to make a mark on the web3 ecosystem by building better tools today.
    </p>
  </Layout>
  <h2>Working on</h2>
  {#each working as project}
    <a href={project.href} target="_">
      <Row class="h-16 mb-4 bg-ui-l1 rounded-lg justify-between">
        <h3 class="py-0 px-6 my-auto">{project.label}</h3>
        <ArrowUpRight24 class="mr-4 my-auto text-ui-d0" />
      </Row>
    </a>
  {/each}
</Layout>
