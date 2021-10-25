<script>
  import { writable } from "svelte/store";
  import { Row } from "../layout";

  export let href = undefined;
  export let company = "";
  export let product = "";

  let y = writable(0);
</script>

<svelte:window bind:scrollY={$y} />

<Row class="sticky z-30 top-0 h-16 backdrop-blur-xl w-full">
  <a {href} class="cursor-pointer">
    <div class="px-6 h-16 flex flex-col justify-center">
      <p class="text-xl select-none">
        <span class="font-bold text-ui-l0">{company}</span>
        <span class="font-normal text-ui-l1">{product}</span>
      </p>
    </div>
  </a>
</Row>
