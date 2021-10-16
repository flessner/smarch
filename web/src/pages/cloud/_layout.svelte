<script>
  import { Shell, HeaderUtility, HeaderLink, Layout, Row } from "carbon-ui";
  import { login, authenticated, logout, self } from "../store.js";
  import Login20 from "carbon-icons-svelte/lib/Login20";
  import Logout20 from "carbon-icons-svelte/lib/Logout20";
  import Application20 from "carbon-icons-svelte/lib/Application20";
  import StopFilledAlt20 from "carbon-icons-svelte/lib/StopFilledAlt20";
  import WarningFilled20 from "carbon-icons-svelte/lib/WarningFilled20";

  let links = [
    {
      label: "Overview",
      icon: Application20,
      href: "/cloud",
    },
    {
      label: "Ceramic",
      icon: StopFilledAlt20,
      links: [
        {
          label: "CMS",
          icon: "",
          href: "/cloud/ceramic/cms",
        },
      ],
    },
  ];
</script>

<Shell rail {links} company="smarch" product="Cloud">
  {#if !$authenticated}
    <HeaderUtility primary icon={Login20} onClick={login} />
  {:else}
    {#await $self.get("basicProfile")}
      <HeaderLink label="User..." />
    {:then profile}
      <HeaderLink label={profile.name || "User"} />
    {/await}
    <HeaderUtility icon={Logout20} onClick={logout} />
  {/if}
  <div slot="content">
    <div class="h-12 w-full bg-uil dark:bg-uid border-b border-danger">
      <Layout class="pt-3">
        <p class="flex">
          <WarningFilled20 class="mt-1 mr-2 text-danger" />
          Current services are only for testing and shouldn't be used in Production.
        </p>
      </Layout>
    </div>
    <slot />
  </div>
</Shell>
