<script>
  import "../../base.css";
  import { Shell, HeaderUtility } from "trauben-ui";
  import { login, logout, self } from "../../store";
  import Menu20 from "carbon-icons-svelte/lib/Menu20";
  import Login20 from "carbon-icons-svelte/lib/Login20";

  let links = [
    {
      label: "Ceramic CMS",
      href: "/cloud",
    },
  ];
</script>

<svelte:head>
  <title>SMARCH</title>
</svelte:head>

<Shell rail {links} company="SMARCH" product="Cloud">
  <HeaderUtility icon={Menu20} onClick={login} />
  {#if !$self}
    <HeaderUtility primary icon={Login20} onClick={login} />
  {:else}
    <HeaderUtility danger icon={Login20} onClick={logout} />
  {/if}
  <slot slot="content" />
</Shell>
