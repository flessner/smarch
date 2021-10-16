<script>
  import { Shell, Title, Layout, HeaderUtility } from "carbon-ui";

  let links = [
    {
      label: "Cloud",
      href: "/cloud",
    },
  ];
</script>

<Shell {links} company="smarch">
  <div slot="content pb-10">
    <Title simple title="Experimenting with Web3" />
    <Layout>
      <blockquote>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </blockquote>
    </Layout>
  </div>
</Shell>
