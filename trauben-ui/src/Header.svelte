<script>
  export let company = "Company";
  export let product = "";
  export let href = "";

  let className = "";
  export { className as class };
</script>

<div
  class="h-12 relative z-30 bg-ui border-b border-ui-7 flex flex-row {className}"
>
  <a {href} class="text-white my-auto px-8 text-sm">
    {company} <span class="font-bold">{product}</span>
  </a>
  <div class="flex flex-row justify-between">
    <slot />
  </div>
</div>
