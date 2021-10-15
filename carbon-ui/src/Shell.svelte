<script>
  import {
    HeaderUtility,
    HeaderLink,
    SidebarLink,
    Row,
    Column,
  } from "./main.js";
  import Menu20 from "carbon-icons-svelte/lib/Menu20";
  import Close20 from "carbon-icons-svelte/lib/Close20";

  export let company;
  export let product = "";
  export let href = "/";
  export let links = [];
  export let iconMenu = Menu20;
  export let iconClose = Close20;
  export let side = false;
  export let dynamic = false;
  export let rail = false;

  export let navOpen = false;

  function navToggle() {
    navOpen = !navOpen;
  }

  let sidebarCss;
  $: if (navOpen) {
    sidebarCss = "w-64 border-r";
  } else {
    if (rail) {
      sidebarCss = "w-12 border-r hover:w-64";
    } else {
      sidebarCss = "w-0 border-r-0";
    }
  }
</script>

<Column class="w-screen h-screen overflow-hidden">
  <!-- HEADER -->
  <Row class="justify-between relative z-30 bg-uid border-b border-uid-skirt">
    <!-- UTILITIES -->
    <Row class="absolute top-0 h-12 w-full justify-end">
      <slot />
    </Row>
    <Column class="md:flex-row relative">
      <Row class="w-64 h-12 flex-shrink-0">
        <!-- BURGER -->
        {#if side || dynamic || rail}
          {#if !navOpen}
            <HeaderUtility icon={iconMenu} onClick={navToggle} />
          {:else}
            <HeaderUtility icon={iconClose} onClick={navToggle} />
          {/if}
        {/if}
        <!-- LOGO -->
        <a {href} class="w-full text-uil hover:bg-uid-pick">
          <div class="px-4 h-12 flex flex-col justify-center">
            <p class="text-base select-none text-uil">
              {company} <span class="font-bold">{product}</span>
            </p>
          </div>
        </a>
      </Row>
      <!-- LINKS -->
      <Row>
        {#if !side && !rail}
          {#each links as link}
            <HeaderLink href={link.href} label={link.label} />
          {/each}
          <slot name="link" />
        {/if}
      </Row>
    </Column>
  </Row>
  <!-- MAIN PAGE -->
  <Row class="h-full relative">
    <!-- SIDEBAR -->
    {#if side || dynamic || rail}
      {#if rail}<div class="w-12 xl:w-0" />{/if}
      <div
        class="{sidebarCss} absolute xl:relative z-20 h-full flex-shrink-0 bg-white border-r border-uil-skirt duration-200 overflow-x-hidden"
      >
        <div class="py-4">
          {#each links as link}
            <SidebarLink href={link.href} icon={link.icon} label={link.label}>
              {#each link.links as sub}
                <SidebarLink href={sub.href} label={sub.label} />
              {/each}
            </SidebarLink>
          {/each}
        </div>
        <slot name="sidebar" />
      </div>
    {/if}
    <!-- CONTENT -->
    <div
      id="content"
      class="h-full w-full overflow-y-scroll bg-uil dark:bg-uid"
    >
      <slot name="content" />
    </div>
  </Row>
</Column>
