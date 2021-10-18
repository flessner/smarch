<script>
  import { authenticated, self } from "../../../store";
  import {
    Layout,
    Table,
    Utility,
    Remark,
    TableRow,
    Row,
    Modal,
    Button,
  } from "carbon-ui";
  import Add24 from "carbon-icons-svelte/lib/Add24";
  import Add20 from "carbon-icons-svelte/lib/Add20";
  import DataViewAlt20 from "carbon-icons-svelte/lib/DataViewAlt20";
  import Delete20 from "carbon-icons-svelte/lib/Delete20";
  import { writable } from "svelte/store";

  self.subscribe((val) => {
    console.log(val);
  });

  // Create Blog Modal
  let createBlogOpen = false;
  let createBlogName = writable("");
  function createBlog() {
    console.log($createBlogName);
    createBlogName.set("");
    createBlogOpen = false;
  }
</script>

<!-- routify:options title="Ceramic CMS" -->

<!-- Create Blog Modal -->
<Modal
  cancel
  submit
  label="Create Blog"
  bind:modalOpen={createBlogOpen}
  onSubmit={createBlog}
>
  <input type="text" bind:value={$createBlogName} placeholder="Blog Name" />
</Modal>

<!-- Main Site -->
<Layout>
  {#if !$authenticated}
    <Remark label="Please login." />
  {:else}
    <Table heading={["Name", "Posts", ""]} title="Blogs" class="mt-12">
      <div slot="utilities">
        <Utility
          primary
          icon={Add24}
          onClick={() => {
            createBlogOpen = true;
          }}
        />
      </div>
      <TableRow>
        <td>Smarch Blog</td>
        <td>8</td>
        <Row class="justify-end">
          <Utility small icon={DataViewAlt20} />
          <Utility small danger icon={Delete20} />
          <Utility small primary icon={Add20} />
        </Row>
      </TableRow>
    </Table>
    <Table
      heading={["Title", "Date", ""]}
      title="Smarch Blog Posts"
      class="mt-8"
    >
      <Row slot="utilities">
        <Button label="Close" />
        <Utility primary icon={Add24} />
      </Row>
    </Table>
  {/if}
</Layout>
