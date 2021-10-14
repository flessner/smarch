<script>
  export let full = false;
  export let narrow = false;
  export let wide = false;

  let css = "";
  if (full) {
    css = "w-full";
  } else if (narrow) {
    css = "max-w-3xl";
  } else if (wide) {
    css = "max-w-7xl";
  } else {
    css = "max-w-5xl";
  }

  let className = "";
  export { className as class };
</script>

<div class="{css} mx-auto px-6 lg:px-8 {className}">
  <slot />
</div>
