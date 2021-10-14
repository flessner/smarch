<script>
  import "carbon-ui/smarch.css";
  import { Shell, HeaderUtility } from "carbon-ui";
  import { login, logout, self } from "$lib/store";
  import User20 from "carbon-icons-svelte/lib/User20";
  import Login20 from "carbon-icons-svelte/lib/Login20";

  let links = [
    {
      label: "Cloud",
      href: "/cloud",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];
</script>

<svelte:head>
  <title>SMARCH</title>
</svelte:head>

<Shell {links} company="SMARCH">
  {#if !$self}
    <HeaderUtility primary icon={Login20} onClick={login} />
  {:else}
    <HeaderUtility href="/account" icon={User20} />
    <HeaderUtility danger icon={Login20} onClick={logout} />
  {/if}
  <slot slot="content" />
</Shell>
