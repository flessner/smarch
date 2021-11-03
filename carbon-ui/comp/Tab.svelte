<script>
  import { Layout, Row } from "../layout";

  export let node = undefined;
  export let url = undefined;
  export let address = "";
  export let label = "";
  export let links = [];

  if (url) {
    url.subscribe(() => {
      setTimeout(() => {
        address = window.location.href;
      }, 25);
    });
  }

  if (node) {
    node.pages.forEach((page) => {
      links.push({
        label: page.meta.title,
        href: page.path,
      });
    });
  }
</script>

<div class="bg-ui-d1">
  <Layout class="h-16">
    <Row class="h-full">
      {#each links as link}
        <a
          href={link.href}
          class="h-full relative text-ui-l1 hover:text-ui-l0 cursor-pointer"
        >
          <p class="mt-5.5 px-4 select-none">{link.label}</p>
          {#if address.includes(link.href)}
            <div class="absolute bottom-0 h-1 w-full bg-primary" />
          {/if}
        </a>
      {/each}
    </Row>
  </Layout>
  <Layout wide class="h-16 -mt-16 overflow-hidden">
    <h4 class="pt-20 xl:pt-5 duration-300 select-none">{label}</h4>
  </Layout>
</div>
