<script>
  export let label;
  export let primary = false;
  export let danger = false;
  export let onClick = () => {};

  let colorCss = "";
  if (primary) {
    colorCss = "bg-primary";
  } else if (danger) {
    colorCss = "bg-danger";
  } else {
    colorCss = "bg-ui-d2";
  }
</script>

<div
  on:click={onClick}
  class="{colorCss} h-16 px-8 cursor-pointer flex flex-col justify-center"
>
  <p class="text-ui-l0 select-none">{label}</p>
</div>
