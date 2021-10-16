<script>
  import { Shell, Title, Layout, HeaderUtility } from "carbon-ui";
  import WatsonHealthWindow20 from "carbon-icons-svelte/lib/WatsonHealthWindowBlackSaturation20";
  import { toggleDarkMode } from "./store";

  let links = [
    {
      label: "Cloud",
      href: "/cloud",
    },
  ];
</script>

<Shell {links} company="smarch">
  <HeaderUtility onClick={toggleDarkMode} icon={WatsonHealthWindow20} />
  <div slot="content">
    <Title simple title="Smarch is back" />
    <Layout>
      <h2>Heading 2</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. <a href="/cloud">Cloud</a>
      </p>
      <h3>Heading 3</h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <h4>Heading 4</h4>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <h5>Heading 5</h5>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <h5>Heading 5</h5>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <h5>Heading 5</h5>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
    </Layout>
  </div>
</Shell>
