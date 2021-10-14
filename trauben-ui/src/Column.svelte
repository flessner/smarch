<script>
  let className = "";
  export { className as class };
</script>

<div class="flex flex-col {className}">
  <slot />
</div>
