<script>
  import "virtual:windi.css";
  import "carbon/smarch.css";

  import { Header, Layout, Column, Row } from "carbon/svelte";

  import HeaderLogo from "carbon-icons-svelte/lib/Terminal32";
  import Menu from "carbon-icons-svelte/lib/Menu32";
  import Close from "carbon-icons-svelte/lib/Close32";

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
    <Header
      company="smarch"
      product="Terminal"
      href="/"
      iconCompany={HeaderLogo}
      iconOpen={Menu}
      iconClose={Close}
    />
  </div>

  <div class="w-full flex-grow">
    <slot />
  </div>
</Column>
