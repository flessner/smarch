<script>
  import { Button } from "../atomic";
  import { Column } from "../layout";
  import { createPopper } from "@popperjs/core";
  import { onMount } from "svelte";
  import CaretDownGlyph from "carbon-icons-svelte/lib/CaretDownGlyph";

  export let open = false;
  export let values;
  export let label = values[0].label;
  export let value = values[0].value;

  let className = "";
  export { className as class };

  // popper
  let popper = undefined;
  let popcornId = "popcorn-" + Math.random().toString(36).slice(2);
  let tooltipId = "tooltip-" + Math.random().toString(36).slice(2);

  onMount(() => {
    popper = createPopper(
      document.querySelector("#" + popcornId),
      document.querySelector("#" + tooltipId),
      {}
    );
  });

  let openCss;
  $: if (open) {
    openCss = "h-auto";
    // fixing position
    popper.update();
  } else {
    openCss = "hidden";
  }
</script>

<div class={className}>
  <Button
    id={popcornId}
    {label}
    icon={CaretDownGlyph}
    onClick={() => {
      open = !open;
    }}
  />
</div>

<div id={tooltipId} class="{openCss} p-1">
  <div class="backdrop-blur-lg py-2 rounded border border-ui-d1">
    {#each values as entry}
      <div
        on:click={() => {
          label = entry.label;
          value = entry.value;
          open = false;
        }}
      >
        <Column
          class="h-8 hover:bg-primary hover:text-ui-l0 justify-center cursor-pointer"
        >
          <p class="px-8 select-none">{entry.label}</p>
        </Column>
      </div>
    {/each}
  </div>
</div>
