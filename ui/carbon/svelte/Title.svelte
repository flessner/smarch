<script>
  import { Layout } from "../svelte";

  export let title;
</script>

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
