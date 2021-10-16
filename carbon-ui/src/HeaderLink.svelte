<script>
  export let label = "label";
  export let href = "/";
</script>

<a {href}>
  <div class="h-12 px-4 select-none hover:bg-uid-pick flex flex-col">
    <p class="my-auto text-base font-thin text-uil">{label}</p>
  </div>
</a>
