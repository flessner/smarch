<script>
  import { Layout, Row } from "./main";

  export let title = "Title";
  export let simple;
  export let tabs = [];
  export let openTab = undefined;

  openTab = tabs[0];
</script>

{#if simple}
  <div
    class="bg-ui-d1 pattern-cross-dots-xl text-ui-d2 border-b border-ui-d2 overflow-hidden"
  >
    <div class="w-full h-72">
      <Layout class="relative h-full">
        <h1 class="absolute bottom-8 mt-auto">
          {title}
        </h1>
      </Layout>
    </div>
    <slot />
  </div>
  {#if tabs[0]}
    <div class="bg-ui-d1 border-b border-ui-d2 h-12">
      <Layout>
        <Row>
          {#each tabs as tab}
            {#if tab == openTab}
              <div
                class="px-8 cursor-pointer h-12 border-t-4 border-primary bg-ui-d0 pt-2"
              >
                <span class="text-ui-l0 select-none mt-2 font-bold">{tab}</span>
              </div>
            {:else}
              <div
                on:click={() => {
                  openTab = tab;
                }}
                class="px-8 cursor-pointer h-12 pt-3"
              >
                <span class="text-ui-l2 select-none font-bold">{tab}</span>
              </div>
            {/if}
          {/each}
        </Row>
      </Layout>
    </div>
  {/if}
{/if}
