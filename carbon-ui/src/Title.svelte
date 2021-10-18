<script>
  import { Layout } from "./main";

  export let title = "Title";
  export let simple;
</script>

{#if simple}
  <div
    class="bg-ui-d1 mb-12 pattern-cross-dots-xl text-ui-d2 border-b border-ui-d2 overflow-hidden"
  >
    <div class="w-full h-72">
      <Layout class="relative h-full">
        <h1 class="absolute bottom-6 mt-auto">
          {title}
        </h1>
      </Layout>
    </div>
    <slot />
  </div>
{/if}
