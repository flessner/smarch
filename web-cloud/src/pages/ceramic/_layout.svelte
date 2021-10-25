<script>
  import { Tab } from "carbon-ui/comp";
  import { Section } from "carbon-ui/cloud";
  import { layout, page } from "@roxi/routify";

  let links = [];
  $layout.children.forEach((e) => {
    console.log(e);
    links.push({
      label: e.title,
      href: e.path,
    });
  });

  console.log($page.meta);
</script>

<Section label="Ceramic" />
<Tab {links} />
<slot />
