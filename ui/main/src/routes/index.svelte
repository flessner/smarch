<script>
  import { Layout, Row } from "carbon/svelte";
  import ArrowUpRight24 from "carbon-icons-svelte/lib/ArrowUpRight24";

  const socials = [
    {
      icon: "assets/twitter.png",
      href: "https://twitter.com",
    },
    {
      icon: "assets/discord.png",
      href: "https://discord.app",
    },
    {
      icon: "assets/telegram.png",
      href: "https://twitter.com",
    },
    {
      icon: "assets/medium.png",
      href: "https://twitter.com",
    },
  ];
</script>

<Layout class="h-64 flex flex-col justify-center">
  <h1>Blockchain.<br />Revolution.<br />Now.</h1>
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
  <Row class="justify-between">
    {#each socials as social}
      <a href={social.href}>
        <img class="h-10" src={social.icon} alt="Social Media" />
      </a>
    {/each}
  </Row>
</Layout>
