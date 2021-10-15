<script>
  import { Shell, Title, Layout } from "carbon-ui";

  let links = [
    {
      label: "Cloud",
      href: "/cloud",
    },
  ];
</script>

<Shell {links} company="SMARCH">
  <div slot="content">
    <Title simple title="Smarch is back" />
    <Layout>
      <h2>Waddup</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. <a href="/cloud">Cloud</a> It was popularised in the
        1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </p>
    </Layout>
  </div>
</Shell>
