<script>
  import "@toast-ui/editor/dist/toastui-editor.css";
  import Editor from "@toast-ui/editor";
  import { onMount } from "svelte";

  onMount(() => {
    const editor = new Editor({
      el: document.querySelector("#editor"),
      height: "500px",
      initialEditType: "markdown",
      theme: "dark",
      previewStyle: "vertical",
      hideModeSwitch: true,
      toolbarItems: [
        ["heading", "bold", "italic", "strike"],
        ["ul", "indent", "outdent"],
        ["code", "codeblock", "link"],
      ],
    });
  });
</script>

<div id="editor" class="bg-ui-l0" />
