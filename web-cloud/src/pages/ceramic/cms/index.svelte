<script>
  import { Product } from "carbon-ui/cloud";
  import { Layout, Row } from "carbon-ui/layout";
  import { Select } from "carbon-ui/atomic";

  let values = [
    { label: "Blog 1", value: "dwadwa" },
    { label: "Blog 2", value: "dawd" },
  ];
</script>

<!-- routify:options title="Ceramic CMS" -->
<!-- routify:options description="Manage Content on the decentralized Web." -->

<Product
  label="CMS"
  description="Manage Content on the decentralized Web."
  button="Create Blog"
/>
<Layout>
  <Row class="justify-between">
    <h4>Blogs</h4>
    <Select {values} class="mt-auto mb-4" />
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
  <h2>H</h2>
  <h2>H</h2>
  <h2>H</h2>
  <h2>H</h2>
  <h2>H</h2>
  <h2>H</h2>
  <h2>H</h2>
  <h2>H</h2>
  <h2>H</h2>
  <h2>H</h2>
  <h2>H</h2>
  <h2>H</h2>
</Layout>
