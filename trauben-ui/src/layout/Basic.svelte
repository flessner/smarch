<script>
  export let id = "";
  export let style = "";
  export let css = "py-16";
</script>

<div {id} {style} class="max-w-6xl mx-auto px-16 {css}">
  <slot />
</div>
