<script>
  export let label = "label";
  export let href = "/";
</script>

<a {href}>
  <div
    class="h-12 px-4 select-none hover:bg-uid-pick text-uil-pick hover:text-uil flex flex-col"
  >
    <p class="my-auto text-sm">{label}</p>
  </div>
</a>
