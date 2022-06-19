<script>
  import "virtual:windi.css";
  import "carbon/smarch.css";

  import { Header, Layout, Column, Row } from "carbon/svelte";

  import HeaderLogo from "carbon-icons-svelte/lib/ShapeJoin32";

  import Discord from "carbon-icons-svelte/lib/LogoDiscord32";
  import Medium from "carbon-icons-svelte/lib/LogoMedium32";
  import Twitter from "carbon-icons-svelte/lib/LogoTwitter32";

  const links = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Mission",
      href: "/mission",
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ];
</script>

<Column class="min-h-screen justify-between">
  <div class="dark">
    <Header company="smarch" href="/" iconCompany={HeaderLogo} />
  </div>

  <div class="w-full flex-grow">
    <slot />
  </div>

  <div class="w-full mt-16">
    <Layout class="h-32">
      <Row class="flex-wrap justify-between h-full">
        <h3 class="p-0 pt-2 md:pt-0 my-auto">smarch</h3>
        <Row class="justify-between w-full md:w-1/3 px-2">
          <a href="/" class="my-auto text-ui-d0">Blog</a>
          <a href="/" class="my-auto text-ui-d0">Twitter</a>
          <a href="/" class="my-auto text-ui-d0">Contact</a>
          <!--
          <a href="discord.app" class="my-auto">
            <Discord class="text-ui-d0" />
          </a>
          <a href="twitter.com" class="my-auto">
            <Twitter class="text-ui-d0" />
          </a>
          <a href="medium.com" class="my-auto">
            <Medium class="text-ui-d0" />
          </a>
          -->
        </Row>
      </Row>
    </Layout>
  </div>
</Column>
