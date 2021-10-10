<script>
  let className = "";
  export { className as class };
</script>

<div class="h-screen -mt-12 pt-12 w-full {className}">
  <div class="h-full overflow-y-scroll bg-ui trauben-scroll">
    <slot />
  </div>
</div>
