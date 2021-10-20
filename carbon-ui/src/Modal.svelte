<script>
  import { Layout, Utility, Row, Button } from "./main";
  import Close20 from "carbon-icons-svelte/lib/Close20";
  import { onMount } from "svelte";

  export let label;
  export let wide = false;
  export let narrow = false;
  export let cancel = false;
  export let submit = false;
  export let del = false;
  export let modalOpen = false;
  export let onClose = () => {};
  export let onSubmit = () => {};
  export let onDel = () => {};

  function closeModal() {
    modalOpen = false;
    onClose;
  }
</script>

{#if modalOpen}
  <div
    class="absolute top-0 bottom-0 w-full bg-black bg-opacity-70 flex flex-col justify-center z-20"
  >
    <Layout {wide} {narrow} class="w-full">
      <div class="border border-ui-d2">
        <div class="bg-ui-d1 w-full relative px-4">
          <Row class="absolute w-full justify-end -ml-4">
            <Utility small icon={Close20} onClick={closeModal} />
          </Row>
          <div class="py-8">
            {#if label}
              <h3 class="-mt-8">{label}</h3>
            {/if}
            <slot />
          </div>
        </div>
        <Row class="bg-ui-d1 w-full justify-end">
          {#if cancel}
            <Button label="Cancel" onClick={closeModal} />
          {/if}
          {#if submit}
            <Button primary label="Submit" onClick={onSubmit} />
          {/if}
          {#if del}
            <Button danger label="Delete" onClick={onDel} />
          {/if}
          <slot name="buttons" />
        </Row>
      </div>
    </Layout>
  </div>
{/if}
