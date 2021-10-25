<script>
  import { Button } from "../atomic";
  import { Column } from "../layout";
  import { createPopper } from "@popperjs/core";
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  export let values;
  export let label = values[0].label;
  export let value = values[0].value;

  let className = "";
  export { className as class };

  let popcornId = "popcorn-" + Math.random().toString(36).slice(2);
  let tooltipId = "tooltip-" + Math.random().toString(36).slice(2);

  onMount(() => {
    createPopper(
      document.querySelector("#" + popcornId),
      document.querySelector("#" + tooltipId)
    );
  });

  export let open = false;
  let openCss;
  $: if (open) {
    openCss = "h-auto";
  } else {
    openCss = "hidden";
  }
</script>

<div class={className}>
  <Button
    id={popcornId}
    {label}
    onClick={() => {
      open = !open;
    }}
  />
</div>

<div id={tooltipId} class="{openCss} p-1">
  <div class="backdrop-blur-lg py-2 rounded-md border border-ui-d1">
    {#each values as entry}
      <div
        on:click={() => {
          label = entry.label;
          value = entry.value;
          open = false;
        }}
      >
        <Column class="h-8 hover:bg-primary justify-center cursor-pointer">
          <p class="px-8 select-none">{entry.label}</p>
        </Column>
      </div>
    {/each}
  </div>
</div>
