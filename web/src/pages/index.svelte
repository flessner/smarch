<script>
  import { metatags } from "@roxi/routify";
  import { Shell, Title, Layout } from "carbon-ui";

  metatags.title = "smarch Cloud";
  metatags.description =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";

  let links = [
    {
      label: "Cloud",
      href: "/cloud",
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ];
</script>

<Shell {links} company="smarch">
  <div slot="content">
    <Title simple title="Experimenting with Web3" />
    <Layout class="mt-12">
      <p>
        You are probably looking for
        <a href="/cloud">Cloud</a> or
        <a href="/blog">Blog</a>.
      </p>
    </Layout>
  </div>
</Shell>
