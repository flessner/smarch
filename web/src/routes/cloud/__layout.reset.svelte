<script>
  import "../../base.css";
  import { Shell, HeaderUtility } from "trauben-ui";
  import { login, logout, self } from "../../store";
  import GroupResource16 from "carbon-icons-svelte/lib/GroupResource16";
  import ModelAlt16 from "carbon-icons-svelte/lib/ModelAlt16";
  import Login20 from "carbon-icons-svelte/lib/Login20";

  let links = [
    {
      label: "Overview",
      icon: ModelAlt16,
      href: "/cloud",
    },
    {
      label: "Ceramic",
      icon: GroupResource16,
      links: [
        {
          label: "CMS",
          href: "/cloud/ceramic/cms",
        },
      ],
    },
  ];
</script>

<svelte:head>
  <title>SMARCH</title>
</svelte:head>

<Shell rail {links} company="SMARCH" product="Cloud">
  {#if !$self}
    <HeaderUtility primary icon={Login20} onClick={login} />
  {:else}
    <HeaderUtility danger icon={Login20} onClick={logout} />
  {/if}
  <slot slot="content" />
</Shell>
