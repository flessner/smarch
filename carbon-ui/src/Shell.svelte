<script>
  import {
    HeaderUtility,
    HeaderLink,
    SidebarLink,
    Row,
    Column,
    SidebarDivider,
  } from "./main.js";
  import Menu24 from "carbon-icons-svelte/lib/Menu24";
  import Close24 from "carbon-icons-svelte/lib/Close24";

  export let company;
  export let product = "";
  export let href = "/";
  export let links = [];
  export let iconMenu = Menu24;
  export let iconClose = Close24;
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

<Column class="h-screen w-full">
  <!-- HEADER -->
  <Row class="justify-between relative z-30 bg-ui-d0 border-b border-ui-d2">
    <!-- UTILITIES -->
    <Row class="absolute top-0 h-16 w-full justify-end">
      <slot />
    </Row>
    <Column class="md:flex-row relative">
      <Row class="h-16 flex-shrink-0">
        <!-- BURGER -->
        {#if side || dynamic || rail}
          {#if !navOpen}
            <HeaderUtility icon={iconMenu} onClick={navToggle} />
          {:else}
            <HeaderUtility icon={iconClose} onClick={navToggle} />
          {/if}
        {/if}
        <!-- LOGO -->
        <a {href} class="w-full">
          <div class="px-6 h-16 flex flex-col justify-center">
            <p class="text-xl select-none">
              <span class="font-bold text-ui-l0">{company}</span>
              <span class="font-thin">{product}</span>
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
  <Row class="overflow-hidden h-full relative">
    <!-- SIDEBAR -->
    {#if side || dynamic || rail}
      {#if rail}<div class="w-12 xl:w-0" />{/if}
      <div
        class="{sidebarCss} absolute xl:relative flex-shrink-0 z-20 h-full bg-ui-d1 border-r border-ui-d2 duration-200 overflow-hidden"
      >
        <div class="py-4">
          {#each links as link}
            {#if link.type == "divider"}
              <SidebarDivider />
            {:else}
              <SidebarLink href={link.href} icon={link.icon} label={link.label}>
                {#each link.links as sub}
                  <SidebarLink href={sub.href} label={sub.label} />
                {/each}
              </SidebarLink>
            {/if}
          {/each}
        </div>
        <slot name="sidebar" />
      </div>
    {/if}
    <!-- CONTENT -->
    <div
      id="content"
      class="w-full h-full relative bg-ui-d0 overflow-y-scroll bg-white"
    >
      <slot name="content" />
    </div>
  </Row>
</Column>
