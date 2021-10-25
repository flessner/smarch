<script>
  export let id;
  export let label;
  export let primary = false;
  export let danger = false;
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
</script>

<button
  {id}
  class="{colorCss} h-8 p-0 m-0 rounded-md flex-shrink-0 {className}"
  on:click={onClick}
  on:blur={onBlur}
>
  <p class="px-8 select-none">{label}</p>
</button>
