<script>
  import { Layout } from "./main";

  export let title = "Title";
  export let simple;
</script>

{#if simple}
  <div class="bg-black mb-12">
    <div class="w-full h-72">
      <Layout class="relative h-full">
        <h1 class="absolute bottom-12 mt-auto text-uil">
          {title}
        </h1>
      </Layout>
    </div>
    <slot />
  </div>
{/if}
