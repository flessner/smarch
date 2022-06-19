<script>
  import "virtual:windi.css";
  import "carbon/smarch.css";

  import { defaultEvmStores, selectedAccount } from "svelte-web3";
  import Avatar from "svelte-boring-avatars";

  import { Header, Layout, Column, Row, Button } from "carbon/svelte";

  import Login24 from "carbon-icons-svelte/lib/Login16";
  import { onMount } from "svelte";

  onMount(() => {
    defaultEvmStores.setProvider();
  });
</script>

<Column class="min-h-screen justify-between">
  <div class="dark">
    <Header
      company="smarch"
      product="Terminal"
      href="/"
      class="border-b border-ui-l1"
    >
      {#if $selectedAccount}
        <!-- AVATAR -->
        <a href="/address/{$selectedAccount}">
          <Row class="cursor-pointer px-4 -mr-4 text-ui-d1">
            <p class="my-auto select-none font-mono">
              {$selectedAccount.slice(0, 6)}
            </p>
            <div class="my-auto mt-1.8 ml-3">
              <Avatar
                name={$selectedAccount}
                size={48}
                variant="marble"
                colors={["#5B1D99", "#0074B4", "#00B34C", "#FFD41F", "#FC6E3D"]}
              />
            </div>
          </Row>
        </a>
      {:else}
        <!-- LOGIN -->
        <Button
          icon={Login24}
          label="Login"
          class="my-auto"
          onClick={() => {
            defaultEvmStores.setProvider();
          }}
        />
      {/if}
    </Header>
  </div>

  <div class="w-full flex-grow">
    <slot />
  </div>
</Column>
