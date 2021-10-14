<script>
  export let href = "/";
  export let label = "Label";
  export let icon;
  export let selected;
</script>

<div class="h-8 w-64 hover:bg-uil-pick">
  <svelte:component this={icon} class="w-12 my-auto" />
  <p>{label}</p>
</div>
