<script>
  import { Layout, Row } from "carbon/svelte";
  import ArrowUpRight24 from "carbon-icons-svelte/lib/ArrowUpRight24";

  const socials = [
    {
      icon: "assets/3d-discord.png",
      href: "https://discord.app",
    },
    {
      icon: "assets/3d-twitter.png",
      href: "https://twitter.com",
    },
    {
      icon: "assets/3d-telegram.png",
      href: "https://twitter.com",
    },
    {
      icon: "assets/3d-medium.png",
      href: "https://twitter.com",
    },
  ];
</script>

<Layout class="h-64 flex flex-row overflow-hidden">
  <h1 class="w-full my-auto">Blockchain.<br />Revolution.<br />Now.</h1>
  <img
    class="h-64 mr-8 hidden sm:flex"
    alt="Symbolic light bulb"
    src="assets/3d-bulb.png"
  />
</Layout>

<Layout>
  <h2>Projects</h2>
  <a href="https://cloud.smarch.net">
    <Row class="h-16 mb-4 bg-ui-l1 rounded-lg justify-between">
      <h3 class="py-0 px-4 my-auto">Cloud</h3>
      <ArrowUpRight24 class="mr-4 my-auto text-ui-d0" />
    </Row>
  </a>
  <a href="https://scan.smarch.net">
    <Row class="h-16 my-4 bg-ui-l1 rounded-lg justify-between">
      <h3 class="py-0 px-4 my-auto">Explorer</h3>
      <ArrowUpRight24 class="mr-4 my-auto text-ui-d0" />
    </Row>
  </a>
  <h2>Socials</h2>
  <Row class="justify-around">
    {#each socials as social}
      <a href={social.href}>
        <img
          class="h-16 md:h-20 lg:h-24"
          src={social.icon}
          alt="Social Media"
        />
      </a>
    {/each}
  </Row>
</Layout>
