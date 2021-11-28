<script>
  import { Header, Layout, Column, Row, Button } from "carbon/svelte";
  import { authenticated, login } from "../stores/ceramic";

  let testing = true;
</script>

<Header company="smarch" product="Cloud" href="/">
  <Layout slot="sidebar" class="py-8">
    <p class="text-ui-d0">TBD</p>
  </Layout>
</Header>

{#if testing || $authenticated}
  <slot />
{:else}
  <Layout narrow class="absolute top-0 bottom-0 left-0 right-0">
    <Column class="h-full justify-center">
      <h1 class="mx-auto pt-0 pb-8 w-full">Welcome!</h1>
      <Button primary big label="Login in with Ceramic" onClick={login} />
    </Column>
  </Layout>
{/if}
