<script>
  import { Layout, Row } from "carbon/svelte";

  import ArrowDown32 from "carbon-icons-svelte/lib/ArrowDown32";

  import Fade24 from "carbon-icons-svelte/lib/Fade24";
  import ChartCandlestick24 from "carbon-icons-svelte/lib/ChartCandlestick24";
  import Terminal24 from "carbon-icons-svelte/lib/Terminal24";
</script>

<!-- OVERVIEW -->
<div class="overflow-hidden -mt-16">
  <Layout invert class="h-screen flex flex-col justify-center">
    <h1 class="text-7xl text-center mb-12">Indexing the new Web</h1>
  </Layout>
</div>

<Row class="absolute w-full bottom-0 h-12 px-4 md:px-8 justify-center">
  <ArrowDown32 class="animate-bounce animate-duration-1000" />
</Row>

<!-- PRODUCTS -->
<Layout class="pb-8">
  <h2>
    <Fade24 class="mr-4" />Root
    <span class="font-mono ml-2 text-base font-medium">
      Blockchain Data Platform
    </span>
  </h2>
  <p class="max-w-2xl">
    Root leverages the huge amounts of the data on the blockchain and makes it
    accessible to you. Querry and explore the blockchain like never before and
    get the answers you need to bring your venture on the blockchain ahead.
  </p>
  <br />
  <a href="https://cloud.smarch.net" class="text-ui-d0">Open Cloud -> </a>
  <h2>
    <ChartCandlestick24 class="mr-4" />Trade
    <span class="font-mono ml-2 text-base font-medium">
      On-Chain Trading System
    </span>
  </h2>
  <p class="max-w-2xl">
    Professional trading software that allows you to trade on the blockchain as
    easy as if it was a centralized exchange. Streaming blockchain data and
    running complex algorithms to make trading decisions for you.
  </p>
  <br />
  <a href="/contact" class="text-ui-d0">Request Access -> </a>
  <h2>
    <Terminal24 class="mr-4" />Terminal
    <span class="font-mono ml-2 text-base font-medium">
      Enthusiast Dashboard
    </span>
  </h2>
  <p class="max-w-2xl">
    The terminal is the best entry point to everyone interacting with the
    blockchain. It allows you to not only view your portfolio but also to trade
    and invest in countless currencies and nfts while preserving
    decentralization.
  </p>
  <br />
  <a href="https://terminal.smarch.net" class="text-ui-d0">Open Terminal -></a>
  <h3 class="pt-32">Ready to get started?</h3>
  <p>Do you have an open problem where we can help or are you just curious?</p>
  <br />
  <a href="/contact" class="text-ui-d0">Contact Us -></a>
</Layout>
