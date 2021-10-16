<script>
  export let icon;
  export let href = "";
  export let onClick = () => {};
  export let primary = false;
  export let danger = false;

  let css = "";
  if (primary) {
    css = "bg-primary";
  } else if (danger) {
    css = "bg-danger";
  } else {
    css = "";
  }
</script>

<a {href}>
  <div class="w-16 h-full max-h-16 cursor-pointer {css}" on:click={onClick}>
    <svelte:component this={icon} class="mx-auto h-full text-ui-l1" />
  </div>
</a>
