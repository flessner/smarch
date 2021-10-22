<script>
  import { writable } from "svelte/store";

  import { Row } from "../layout";

  export let href = undefined;
  export let company = "";
  export let product = "";

  let y = writable(0);
</script>

<svelte:window bind:scrollY={$y} />

<div class={"sticky top-0 h-16 bg-ui-l0 w-full"}>
  <Row>
    <a {href} class="w-full">
      <div class="px-6 h-16 flex flex-col justify-center">
        <p class="text-xl select-none">
          <span class="font-bold text-ui-d0">{company}</span>
          <span class="font-normal text-ui-d1">{product}</span>
        </p>
      </div>
    </a>
  </Row>
</div>
