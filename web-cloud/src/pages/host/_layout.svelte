<script>
  import { Tab } from "carbon-ui/comp";
  import { Section } from "carbon-ui/cloud";
  import { layout, page } from "@roxi/routify";

  let links = [];
  $layout.children.forEach((e) => {
    if (e.__file.isPage) {
      links.push({
        label: e.meta.title,
        href: e.path,
      });
    } else {
      links.push({
        label: e.__file.children[0].meta.title,
        href: e.__file.children[0].path,
      });
    }
  });
</script>

<Section label="Hosting" />
<Tab {links} path={$page.path} />
<slot />
