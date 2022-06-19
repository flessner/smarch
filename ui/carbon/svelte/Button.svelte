<script>
  import { Row } from "../svelte";

  export let id = undefined;
  export let label;
  export let primary = false;
  export let danger = false;
  export let icon = undefined;
  export let onClick = () => {};
  export let onBlur = () => {};

  let className = "";
  export { className as class };

  let colorCss = "";
  if (primary) {
    colorCss = "bg-primary font-light text-ui-l0";
  } else if (danger) {
    colorCss = "bg-danger font-light text-ui-l0";
  } else {
    colorCss = "border border-ui-l1";
  }
</script>

<button
  {id}
  class="{colorCss} p-0 m-0 h-10 flex-shrink-0 px-8 {className}"
  on:click={onClick}
  on:blur={onBlur}
>
  <Row>
    <p class="select-none">{label}</p>
    {#if icon}
      <svelte:component this={icon} class="my-auto ml-2" />
    {/if}
  </Row>
</button>
