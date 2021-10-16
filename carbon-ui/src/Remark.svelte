<script>
  import { Layout } from "./main";
  import WarningFilled20 from "carbon-icons-svelte/lib/WarningFilled20";

  export let label = "";
  export let danger = false;
</script>

{#if danger}
  <div class="w-full bg-danger">
    <Layout class="py-2">
      <p class="flex text-ui-l0">
        <WarningFilled20 class="mt-1 mr-2 flex-shrink-0" />
        {label}
      </p>
    </Layout>
  </div>
{/if}
