<script>
  export let open;

  let openCss = "";
  $: if (open) {
    openCss = "md:w-96 w-full";
  } else {
    openCss = "w-0";
  }
</script>

<div
  class="{openCss} fixed z-20 right-0 top-0 bottom-0 backdrop-filter backdrop-blur-xl duration-300 overflow-hidden"
>
  <slot />
</div>
