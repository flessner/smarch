<script>
  import { Column, Row } from "./main";

  export let title;
  export let heading = [];

  let className = "";
  export { className as class };
</script>

<Column class="border-l border-r border-t border-ui-d2 {className}">
  <Row class="h-16 bg-ui-d1 justify-between">
    <h4 class="pt-0 pb-0 my-auto px-4">{title}</h4>
    <slot name="utilities" />
  </Row>
  <table>
    <tr class="bg-ui-d2 h-12">
      {#each heading as entry}
        <th>{entry}</th>
      {/each}
    </tr>
    <slot />
  </table>
</Column>
