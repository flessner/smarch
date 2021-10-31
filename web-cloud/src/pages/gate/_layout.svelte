<script>
  import { Tab } from "carbon-ui/comp";
  import { Section } from "carbon-ui/cloud";
  import { layout, page } from "@roxi/routify";

  let links = [];
  $layout.children.forEach((e) => {
    links.push({
      label: e.title,
      href: e.path,
    });
  });
  console.log($layout.children);
</script>

<Section label="Gate" />
<Tab {links} />
<slot />
