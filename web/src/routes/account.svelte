<script>
  import { Title } from "carbon-ui";
  import { self, did } from "$lib/store";
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
