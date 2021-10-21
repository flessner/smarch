<script>
  import "@toast-ui/editor/dist/toastui-editor.css";
  import Editor from "@toast-ui/editor";
  import { onMount } from "svelte";

  export let value = "";

  let editorId = "editor" + Math.floor(Math.random() * 10000000);

  onMount(() => {
    const editor = new Editor({
      el: document.querySelector("#" + editorId),
      initialValue: value,
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

    editor.addHook("change", (val) => {
      value = editor.getMarkdown();
    });
  });
</script>

<div id={editorId} class="bg-ui-l0" />
