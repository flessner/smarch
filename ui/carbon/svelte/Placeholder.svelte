<script>
  let className = "";
  export { className as class };
</script>

<div class="w-full {className} rounded bg-ui-l1 dark:bg-ui-d1 ph" />

<style>
  .ph {
    animation: ph-blink 2s infinite ease-in-out;
  }

  @keyframes ph-blink {
    0% {
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
    70% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
</style>
