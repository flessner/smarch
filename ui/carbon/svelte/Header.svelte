<script>
  import { writable } from "svelte/store";
  import { Column, Row } from "../svelte";

  export let iconCompany;
  export let href = undefined;
  export let company = "";
  export let product = "";

  let className = "";
  export { className as class };

  let y = writable(0);
</script>

<svelte:window bind:scrollY={$y} />

<div class="h-16" />

<Column class="fixed z-20 top-0 bottom-0 w-full pointer-events-none">
  <div
    class="
        h-auto bg-ui-d0 dark:bg-ui-l0 pointer-events-auto overflow-hidden"
  >
    <Row class="h-16 w-full justify-between px-4 {className}">
      <a {href} class="cursor-pointer">
        <Row class="h-full text-ui-l0 dark:text-ui-d0">
          {#if iconCompany}
            <Column class="h-full justify-center">
              <svelte:component this={iconCompany} class="mr-2" />
            </Column>
          {/if}
          <h4 class="select-none py-0 my-auto text-ui-l0 dark:text-ui-d0">
            {company}
            <span class="font-mono font-normal text-lg ml-4px">{product}</span>
          </h4>
        </Row>
      </a>
      <slot />
    </Row>
  </div>
</Column>
