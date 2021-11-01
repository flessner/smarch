<script>
  import { writable } from "svelte/store";
  import { Column, Row } from "../layout";

  import Menu32 from "carbon-icons-svelte/lib/Menu32";
  import Close32 from "carbon-icons-svelte/lib/Close32";

  export let href = undefined;
  export let company = "";
  export let product = "";
  export let sidebarOpen = false;

  let y = writable(0);

  function toggleSidebar() {
    sidebarOpen = !sidebarOpen;
  }
</script>

<svelte:window bind:scrollY={$y} />

<div class="h-16" />

<Column class="fixed z-20 top-0 bottom-0 w-full">
  <div class="backdrop-filter backdrop-blur-xl">
    <!-- HEADER -->
    <Row class="h-16 w-full justify-between">
      <a {href} class="cursor-pointer">
        <div class="px-6 h-16 flex flex-col justify-center">
          <p class="text-xl select-none">
            <span class="font-bold text-ui-l0">{company}</span>
            <span class="font-normal text-ui-l1">{product}</span>
          </p>
        </div>
      </a>
      <slot />
      {#if $$slots.sidebar}
        <div
          class="h-16 w-16 flex flex-row justify-center cursor-pointer"
          on:click={toggleSidebar}
        >
          <Column class="h-full justify-center">
            {#if sidebarOpen}
              <Close32 class="text-ui-l0" />
            {:else}
              <Menu32 class="text-ui-l0" />
            {/if}
          </Column>
        </div>
      {/if}
    </Row>

    <!-- SIDEBAR -->
    {#if sidebarOpen}
      <div class="h-64">
        <slot name="sidebar" />
      </div>
    {/if}
  </div>

  <!-- SIDEBAR RUNOFF -->
  {#if sidebarOpen}
    <div
      on:click={toggleSidebar}
      class="w-full flex-grow backdrop-filter backdrop-brightness-50 cursor-pointer"
    />
  {/if}
</Column>
