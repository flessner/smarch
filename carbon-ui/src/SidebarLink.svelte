<script>
  import { Row } from "./main";
  import ChevronDown16 from "carbon-icons-svelte/lib/ChevronDown16";
  import ChevronUp16 from "carbon-icons-svelte/lib/ChevronUp16";

  export let href;
  export let label = "Label";
  export let icon;

  let selected = false;

  let selectedCss;
  if (selected) {
    selectedCss = "text-uid";
  }

  let menuOpen = false;

  function toggleMenu() {
    if (!href) {
      menuOpen = !menuOpen;
    }
  }
</script>

<div>
  <a {href} on:click={toggleMenu}>
    <div class="{selectedCss} h-8 w-64 relative cursor-pointer">
      {#if selected}
        <div class="absolute left-0 w-1 h-full bg-primary" />
      {/if}
      {#if menuOpen}
        <div class="absolute left-0 w-1 h-full bg-ui-l2" />
      {/if}
      <Row class="text-ui-l2 hover:text-ui-l0 duration-200">
        <svelte:component this={icon} class="w-12 h-6 mt-1 pl-1.5" />
        <Row class="justify-between w-full">
          <span class="pt-1 pl-2 select-none">{label}</span>

          {#if !href}
            {#if !menuOpen}
              <svelte:component this={ChevronDown16} class="w-12 mt-2" />
            {:else}
              <svelte:component this={ChevronUp16} class="w-12 mt-2" />
            {/if}
          {/if}
        </Row>
      </Row>
    </div>
  </a>
  {#if menuOpen}
    <div class="pl-6 ml-6 border-l border-ui-l2 mb-2">
      <slot />
    </div>
  {/if}
</div>
