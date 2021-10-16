<script>
  export let icon;
  export let href = "";
  export let onClick = () => {};
  export let primary = false;
  export let danger = false;

  let css = "";
  if (primary) {
    css = "bg-primary hover:bg-primary-pick";
  } else if (danger) {
    css = "bg-danger hover:bg-danger-pick";
  } else {
    css = "hover:bg-uid";
  }
</script>

<a {href}>
  <div
    class="w-16 h-full max-h-16 text-uil cursor-pointer {css}"
    on:click={onClick}
  >
    <svelte:component this={icon} class="mx-auto h-full" />
  </div>
</a>
