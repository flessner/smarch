<script>
  let className = "";
  export { className as class };
</script>

<div class="flex flex-row {className}">
  <slot />
</div>
