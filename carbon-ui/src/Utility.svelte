<script>
  export let icon;
  export let href = undefined;
  export let onClick = () => {};
  export let primary = false;
  export let danger = false;
  export let small = false;

  let css = "";
  if (primary) {
    css = "bg-primary text-ui-l0";
  } else if (danger) {
    css = "bg-danger text-ui-l0";
  } else {
    css = "text-ui-l2 hover:text-ui-l0";
  }

  let sizeCss = "";
  if (small) {
    sizeCss = "w-12 h-12";
  } else {
    sizeCss = "w-16 h-16";
  }
</script>

<a {href}>
  <div class="{sizeCss} {css} cursor-pointer duration-200" on:click={onClick}>
    <svelte:component this={icon} class="mx-auto h-full" />
  </div>
</a>
