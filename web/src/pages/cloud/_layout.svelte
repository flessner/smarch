<script>
  import { Shell, HeaderUtility, HeaderLink, Remark } from "carbon-ui";
  import { login, authenticated, logout, self } from "../../stores/ceramic";

  import Login20 from "carbon-icons-svelte/lib/Login20";
  import Logout20 from "carbon-icons-svelte/lib/Logout20";
  import Application20 from "carbon-icons-svelte/lib/Application20";
  import PenFountain20 from "carbon-icons-svelte/lib/PenFountain20";
  import ChartColumn20 from "carbon-icons-svelte/lib/ChartColumn20";

  let links = [
    {
      label: "Overview",
      icon: Application20,
      href: "/cloud",
    },
    {
      type: "divider",
    },
    {
      label: "Ceramic CMS",
      icon: PenFountain20,
      href: "/cloud/ceramic-cms",
    },
    {
      label: "Ceramic Analytics",
      icon: ChartColumn20,
      href: "/cloud/ceramic-analytics",
    },
  ];
</script>

<Shell rail {links} company="smarch" product="Cloud" href="/cloud">
  {#if !$authenticated}
    <HeaderUtility primary icon={Login20} onClick={login} />
  {:else}
    {#await $self.get("basicProfile")}
      <HeaderLink label="User..." />
    {:then profile}
      <HeaderLink
        label={profile.name || "User"}
        href={"https://clay.self.id/" + $self.id}
        target="_blank"
      />
    {/await}
    <HeaderUtility icon={Logout20} onClick={logout} />
  {/if}
  <div slot="content">
    <Remark
      danger
      label="Current services are only for testing and shouldn't be used in production.
      (Clay Testnet)"
    />
    <slot />
  </div>
</Shell>
