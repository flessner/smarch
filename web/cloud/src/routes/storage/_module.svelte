<script>
  import { Tab } from "carbon/svelte";
  import { node, url } from "@roxi/routify";
</script>

<Tab {node} {url} label="Storage" />
<slot />
