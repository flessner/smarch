<script>
  export let href = "/";
</script>

<a {href}>
  <div
    class="h-12 px-4 hover:bg-bright text-bright hover:text-white text-sm flex flex-col"
  >
    <p class="my-auto"><slot /></p>
  </div>
</a>
