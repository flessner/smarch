<script>
  import { Sidebar } from "../comp";
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

<Row
  class="sticky z-30 top-0 h-16 backdrop-filter backdrop-blur-xl w-full justify-between"
>
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
    <div class="h-16 w-16 cursor-pointer" on:click={toggleSidebar}>
      {#if sidebarOpen}
        <Close32 class="m-auto h-full text-ui-l0" />
      {:else}
        <Menu32 class="m-auto h-full text-ui-l0" />
      {/if}
    </div>
  {/if}
</Row>

<Sidebar bind:open={sidebarOpen}>
  <div class="h-16" />
  <slot name="sidebar" />
</Sidebar>
