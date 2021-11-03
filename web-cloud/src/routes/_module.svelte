<script>
  import { Header } from "carbon-ui/comp";
  import { Button } from "carbon-ui/atomic";
  import { Layout, Column, Row } from "carbon-ui/layout";
  import { authenticated, login } from "../stores/ceramic";

  let testing = true;
</script>

<Header company="smarch" product="Cloud" href="/">
  <Layout slot="sidebar" class="py-8">
    <Row>
      <div class="w-full">
        <h3 class="pt-0">Gate</h3>
        <Column>
          <a href="/gate/ceramic" class="text-ui-l0">Ceramic</a>
          <a href="/gate/ethereum" class="text-ui-l0">Ethereum</a>
        </Column>
      </div>
      <div class="w-full">
        <h3 class="pt-0">Storage</h3>
        <Column>
          <a href="/storage/ceramic" class="text-ui-l0">Ceramic</a>
          <a href="/storage/ipfs" class="text-ui-l0">IPFS</a>
          <a href="/storage/textile" class="text-ui-l0">Textile</a>
        </Column>
      </div>
      <div class="w-full">
        <h3 class="pt-0">Account</h3>
        <Column>
          <a href="/storage/ceramic" class="text-ui-l0">Logout</a>
        </Column>
      </div>
    </Row>
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
