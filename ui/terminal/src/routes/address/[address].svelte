<script>
  import { Layout, Column, Row } from "carbon/svelte";

  import { page } from "$app/stores";
</script>

<Layout full>
  <h3 class="select-none">Address</h3>
  <p class="-mt-4 font-mono font-normal text-ui-d1">
    {$page.params.address}
  </p>
  <div class="h-48 border border-ui-l1 my-4" />
  <h4>Transactions</h4>
</Layout>
