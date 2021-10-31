<script>
  import { Layout, Row, Column } from "../layout";

  export let links = [];
</script>

<div class="bg-ui-d1">
  <Layout class="h-16">
    <Row class="h-full">
      {#each links as link}
        <a
          href={link.href}
          class="h-full relative text-ui-l1 hover:text-ui-l0 cursor-pointer"
        >
          <p class="mt-5 px-4 select-none">{link.label}</p>
          <div class="absolute bottom-0 h-1 w-full bg-primary" />
        </a>
      {/each}
    </Row>
  </Layout>
</div>
