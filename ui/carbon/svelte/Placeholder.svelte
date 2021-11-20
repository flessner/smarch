<script>
  let className = "";
  export { className as class };
</script>

<div class="w-full {className} rounded placeholder" />

<style>
  .placeholder {
    background-image: linear-gradient(90deg, #363636, #0000, #363636, #0000);
    background-size: 300% 100%;
    animation: placeholder-stroke 1.5s infinite ease-in-out;
  }

  @keyframes placeholder-stroke {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100% 0;
    }
  }
</style>
