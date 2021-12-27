<script>
  import { writable } from "svelte/store";
  import { Column, Row } from "../svelte";

  export let iconCompany;
  export let iconOpen;
  export let iconClose;
  export let href = undefined;
  export let url = undefined;
  export let company = "";
  export let product = "";
  export let sidebarOpen = false;

  let y = writable(0);

  function toggleSidebar() {
    sidebarOpen = !sidebarOpen;
  }

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
        h-auto bg-ui-d0 dark:bg-ui-l0 pointer-events-auto overflow-hidden"
  >
    <!-- HEADER -->
    <Row class="h-16 w-full justify-between px-4 md:px-8">
      <a {href} class="cursor-pointer">
        <Row class="h-full text-ui-l0 dark:text-ui-d0">
          {#if iconCompany}
            <Column class="h-full justify-center">
              <svelte:component this={iconCompany} class="mr-2" />
            </Column>
          {/if}
          <h4 class="select-none py-0 my-auto">
            {company}
            <span class="font-mono ml-2px uppercase">{product}</span>
          </h4>
        </Row>
      </a>
      <slot />
      {#if $$slots.sidebar}
        <div
          class="h-16 w-16 flex flex-row justify-center cursor-pointer"
          on:click={toggleSidebar}
        >
          <Column class="h-full justify-center">
            {#if sidebarOpen}
              <svelte:component
                this={iconClose}
                class="text-ui-l0 dark:text-ui-d0"
              />
            {:else}
              <svelte:component
                this={iconOpen}
                class="text-ui-l0 dark:text-ui-d0"
              />
            {/if}
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
