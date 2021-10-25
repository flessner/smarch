<script>
  import { Layout, Row, Column } from "../layout";

  export let links = [];
</script>

<div class="bg-ui-d1">
  <Layout class="h-16">
    <Row class="h-full">
      {#each links as link}
        <Column class="relative hover:text-ui-l0 cursor-pointer">
          <p class="my-auto px-8 select-none">{link.label}</p>
          <div class="absolute bottom-0 h-1 w-full bg-primary" />
        </Column>
      {/each}
    </Row>
  </Layout>
</div>
