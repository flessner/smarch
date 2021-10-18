<script>
  export let label = "label";
  export let href = undefined;
  export let onClick = () => {};
</script>

<a {href} on:click={onClick} class="cursor-pointer">
  <div
    class="h-full select-none flex flex-col text-ui-l2 hover:text-ui-l0 duration-200"
  >
    <div class="my-auto text-base px-6 py-2">
      <span>{label}</span>
    </div>
  </div>
</a>
