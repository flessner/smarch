<script>
  import { page, metatags } from "@roxi/routify";
  import {
    Shell,
    HeaderUtility,
    HeaderLink,
    Remark,
    Title,
    Layout,
  } from "carbon-ui";
  import { login, authenticated, logout, self } from "../store.js";

  import Login20 from "carbon-icons-svelte/lib/Login20";
  import Logout20 from "carbon-icons-svelte/lib/Logout20";
  import Application20 from "carbon-icons-svelte/lib/Application20";
  import StopFilledAlt20 from "carbon-icons-svelte/lib/StopFilledAlt20";

  $: metatags.title = "smarch Cloud";
  $: metatags.description = $page.meta.description;

  console.log($page);

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
    <Remark
      danger
      label="Current services are only for testing and shouldn't be used in production.
      (Clay Testnet)"
    />
    {#if $page.meta.title}
      <Title simple title={$page.meta.title} />
    {/if}
    {#if $page.meta.description}
      <Layout narrow>
        <blockquote>{$page.meta.description}</blockquote>
      </Layout>
    {/if}
    <slot />
  </div>
</Shell>
