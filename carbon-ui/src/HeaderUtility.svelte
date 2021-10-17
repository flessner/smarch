<script>
  export let icon;
  export let href = undefined;
  export let onClick = () => {};
  export let primary = false;
  export let danger = false;

  let css = "";
  if (primary) {
    css = "bg-primary text-ui-l0";
  } else if (danger) {
    css = "bg-danger text-ui-l0";
  } else {
    css = "text-ui-l2 hover:text-ui-l0";
  }
</script>

<a {href}>
  <div
    class="w-16 h-full max-h-16 cursor-pointer duration-200 {css}"
    on:click={onClick}
  >
    <svelte:component this={icon} class="mx-auto h-full" />
  </div>
</a>
