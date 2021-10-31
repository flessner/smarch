<script>
  import { Product } from "carbon-ui/cloud";
  import { Layout, Row } from "carbon-ui/layout";
  import "css-doodle";

  let values = [
    { label: "Blog 1", value: "dwadwa" },
    { label: "Blog 2", value: "dawd" },
  ];
</script>

<!-- routify:options title="Ceramic" -->
<!-- routify:options description="Manage Content on the decentralized Web." -->

<Product
  label="Ceramic"
  description="Manage Content on the Ceramic Network."
  button="Create Bucket"
/>
<Layout>
  <Row class="justify-between">
    <h4>Buckets</h4>
  </Row>
  <table>
    <tr>
      <th>Post</th>
      <th>Id</th>
    </tr>
    <tr>
      <td>A new Dawn</td>
      <td>#4343</td>
    </tr>
    <tr>
      <td>A new Dawn</td>
      <td>#4343</td>
    </tr>
    <tr>
      <td>A new Dawn</td>
      <td>#4343</td>
    </tr>
  </table>
  <div class="w-full overflow-hidden mt-4 relative">
    <css-doodle>
      @grid: 1 / 100vw 100px; background-size: 83px 135px; background-color:
      #D24B45; background-image: @doodle( @grid: 2 / 100%; background:
      @pn(#3C2B34, #F7F0E9, #F7F0E9); transform-origin: @pn(100% 100%, 0 100%,
      100% 0, 0 0); transform: rotateX(45deg) skewY(@pn(34deg, -34deg, -34deg));
      );
    </css-doodle>
  </div>
</Layout>
