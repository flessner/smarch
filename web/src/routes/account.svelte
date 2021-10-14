<script>
  import { Title } from "trauben-ui";
  import { self, did } from "../store";
</script>

{#if $self}
  {#await $self.get("basicProfile")}
    <Title simple title="Loading..." />
  {:then profile}
    <Title simple title={profile.name} />
  {/await}
{:else}
  <p>Please Login...</p>
{/if}
