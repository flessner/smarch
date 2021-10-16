<script>
  export let label = "label";
  export let href = "/";
</script>

<a {href}>
  <div
    class="h-full select-none flex flex-col text-uil-skirt hover:text-white duration-200"
  >
    <div class="my-auto text-base px-6 py-2">
      <span>{label}</span>
    </div>
  </div>
</a>
