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

<Column class="h-screen w-full">
  <!-- HEADER -->
  <Row class="justify-between relative z-30 bg-black border-b border-uid-skirt">
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
          <div class="px-8 h-16 flex flex-col justify-center">
            <p class="text-xl select-none font-bold">
              <span class="text-white">{company}</span>
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
        class="{sidebarCss} absolute xl:relative flex-shrink-0 z-20 h-full bg-uil dark:bg-uid border-r border-uil-skirt dark:border-uid-skirt duration-200 overflow-hidden"
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
      class="w-full h-full overflow-y-scroll bg-white dark:bg-black"
    >
      <slot name="content" />
    </div>
  </Row>
</Column>
