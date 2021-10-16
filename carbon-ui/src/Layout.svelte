<script>
  export let full = false;
  export let narrow = false;
  export let wide = false;

  let css = "";
  if (full) {
    css = "w-full";
  } else if (wide) {
    css = "max-w-7xl mx-auto";
  } else {
    css = "max-w-5xl mx-auto";
  }

  let className = "";
  export { className as class };
</script>

<div class="{css} px-6 lg:px-8 {className}">
  {#if narrow}
    <div class="max-w-2xl ml-0 mr-auto">
      <slot />
    </div>
  {:else}
    <slot />
  {/if}
</div>
