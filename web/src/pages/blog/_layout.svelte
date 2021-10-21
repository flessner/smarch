<script>
  import { Shell, HeaderUtility, HeaderLink, Remark } from "carbon-ui";
  import { CeramicCMS } from "smarch-js";
  import CeramicClient from "@ceramicnetwork/http-client";

  const cms = new CeramicCMS(
    new CeramicClient("https://gateway-clay.ceramic.network")
  );
</script>

<Shell
  company="smarch"
  product="Blog"
  links={[{ label: "Posts", href: "/blog" }]}
>
  <div slot="content"><slot scoped={{ cms: cms }} /></div>
</Shell>
