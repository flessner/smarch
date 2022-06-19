<script>
  import { Layout, Column, Row } from "carbon/svelte";

  import { page } from "$app/stores";
</script>

<Layout full>
  <h3 class="select-none">Transactions</h3>
  <p class="-mt-4 font-mono font-normal text-ui-d1">
    {$page.params.tx}
  </p>
</Layout>
