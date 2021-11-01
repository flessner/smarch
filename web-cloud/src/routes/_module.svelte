<script>
  import { Header } from "carbon-ui/comp";
  import { Button } from "carbon-ui/atomic";
  import { Layout, Column } from "carbon-ui/layout";
  //import { authenticated } from "../stores/ceramic";

  let testing = true;
</script>

<Header company="smarch" product="Cloud" href="/">
  <div slot="sidebar" class="w-full">
    <h3 class="mx-8">Services</h3>
    <Button primary label="Sidebar" class="mx-8 mr-auto" />
  </div>
</Header>

{#if testing}
  <slot />
{:else}
  <Layout narrow>
    <h2 class="mx-auto">Welcome to smarch Cloud!</h2>
    <blockquote class="pb-8">
      Smarch Cloud is where you are. We are pioneering decentralized Cloud
      solutions for our customers worldwide.
    </blockquote>
    <Column>
      <Button primary big label="Login in with 3ID Connect" />
    </Column>
  </Layout>
{/if}
