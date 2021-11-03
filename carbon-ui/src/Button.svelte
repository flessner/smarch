<script>
  import { Row } from "./main";

  export let id = undefined;
  export let label;
  export let primary = false;
  export let danger = false;
  export let big = false;
  export let icon = undefined;
  export let onClick = () => {};
  export let onBlur = () => {};

  let className = "";
  export { className as class };

  let colorCss = "";
  if (primary) {
    colorCss = "bg-primary text-ui-l0";
  } else if (danger) {
    colorCss = "bg-danger text-ui-l0";
  } else {
    colorCss = "border border-ui-d1";
  }

  let sizeCss = "";
  if (big) {
    sizeCss = "h-16 font-bold";
  } else {
    sizeCss = "h-8";
  }
</script>

<button
  {id}
  class="{colorCss} {sizeCss} p-0 m-0 flex-shrink-0 pl-8 {className} 
  {icon ? 'pr-4' : 'pr-8'}"
  on:click={onClick}
  on:blur={onBlur}
>
  <Row>
    <p class="select-none">{label}</p>
    {#if icon}
      <svelte:component this={icon} class="my-auto ml-4" />
    {/if}
  </Row>
</button>
