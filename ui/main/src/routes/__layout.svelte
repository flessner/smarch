<script>
  import "virtual:windi.css";
  import "carbon/smarch.css";

  import { Header, Layout, Column, Row } from "carbon/svelte";

  import Menu from "carbon-icons-svelte/lib/Menu32";
  import Close from "carbon-icons-svelte/lib/Close32";

  import Discord from "carbon-icons-svelte/lib/LogoDiscord32";
  import Medium from "carbon-icons-svelte/lib/LogoMedium32";
  import Twitter from "carbon-icons-svelte/lib/LogoTwitter32";
  import YouTube from "carbon-icons-svelte/lib/LogoYoutube32";

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
  <Header company="smarch" href="/" icon={Menu} iconClose={Close}>
    <Layout slot="sidebar" class="pt-4 pb-8">
      <Column class="pl-4 border-l-4 py-2 border-ui-d1">
        {#each links as link}
          <a href={link.href} class="text-ui-l0 font-bold">
            {link.label}
          </a>
        {/each}
      </Column>
    </Layout>
  </Header>

  <div class="w-full flex-grow">
    <slot />
  </div>

  <div class="w-full bg-ui-d1 mt-16">
    <Layout class="h-32">
      <Row class="flex-wrap justify-between h-full">
        <h3 class="p-0 pt-2 md:pt-0 my-auto text-ui-l1">smarch</h3>
        <Row class="justify-between w-full md:w-1/2 px-2">
          <a href="discord.app" class="my-auto">
            <Discord class="text-ui-l1" />
          </a>
          <a href="twitter.com" class="my-auto">
            <Twitter class="text-ui-l1" />
          </a>
          <a href="medium.com" class="my-auto">
            <Medium class="text-ui-l1" />
          </a>
          <a href="youtube.com" class="my-auto">
            <YouTube class="text-ui-l1" />
          </a>
        </Row>
      </Row>
    </Layout>
  </div>
</Column>
