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
        <div class="absolute left-0 w-1 h-full bg-uid-skirt" />
      {/if}
      <Row>
        <svelte:component
          this={icon}
          class="w-12 h-6 mt-1 pl-1.5 text-uid dark:text-uil"
        />
        <Row class="justify-between w-full">
          <p class="pt-1 pl-2 select-none">
            {label}
          </p>
          {#if !href}
            {#if !menuOpen}
              <svelte:component
                this={ChevronDown16}
                class="w-12 mt-2 text-uid dark:text-uil"
              />
            {:else}
              <svelte:component
                this={ChevronUp16}
                class="w-12 mt-2 text-uid dark:text-uil"
              />
            {/if}
          {/if}
        </Row>
      </Row>
    </div>
  </a>
  {#if menuOpen}
    <div class="pl-6 ml-6 border-l border-uid-skirt mb-2">
      <slot />
    </div>
  {/if}
</div>
