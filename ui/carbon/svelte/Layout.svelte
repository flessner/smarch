<script>
  export let full = false;
  export let narrow = false;
  export let wide = false;

  let className = "";
  export { className as class };

  let css = "";
  if (full) {
    css = "w-full";
  } else if (wide) {
    css = "max-w-7xl mx-auto";
  } else if (narrow) {
    css = "max-w-2xl mx-auto";
  } else {
    css = "max-w-5xl mx-auto";
  }
</script>

<div class="{css} {className} px-4 md:px-8">
  <slot />
</div>
