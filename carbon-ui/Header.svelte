<script>
  import { writable } from "svelte/store";
  import { Column, Row } from "./main";

  export let menu = undefined;
  export let close = undefined;
  export let href = undefined;
  export let url = undefined;
  export let company = "";
  export let product = "";
  export let sidebarOpen = false;

  let y = writable(0);

  function toggleSidebar() {
    sidebarOpen = !sidebarOpen;
  }

  console.log([menu, close]);

  if (url) {
    url.subscribe(() => {
      sidebarOpen = false;
    });
  }
</script>

<svelte:window bind:scrollY={$y} />

<div class="h-16" />

<Column class="fixed z-20 top-0 bottom-0 w-full pointer-events-none">
  <div
    class="
        h-auto backdrop-filter backdrop-blur-xl pointer-events-auto overflow-hidden"
  >
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
            <!--
            {#if sidebarOpen}
              <Close32 class="text-ui-l0" />
            {:else}
              <Menu32 class="text-ui-l0" />
            {/if}
            -->
          </Column>
        </div>
      {/if}
    </Row>

    <!-- SIDEBAR -->
    <div class={sidebarOpen ? "h-auto" : "h-0"}>
      <slot name="sidebar" />
    </div>
  </div>

  <!-- SIDEBAR RUNOFF -->
  <div
    on:click={toggleSidebar}
    class="{sidebarOpen
      ? 'backdrop-brightness-50 cursor-pointer pointer-events-auto'
      : 'backdrop-brightness-100 pointer-events-none'}
      w-full flex-grow backdrop-filter duration-300"
  />
</Column>
