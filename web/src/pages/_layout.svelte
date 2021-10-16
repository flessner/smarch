<script>
  import { darkMode } from "./store";
  darkMode.subscribe((val) => {
    if (val) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });
</script>

<slot />
