<script context="module">
  import { getStructures } from "$lib/structures";

  export async function load() {
    return {
      props: {
        structures: await getStructures(),
      },
    };
  }
</script>

<script>
  import { userInfo } from "$lib/auth";
  import StructuresList from "./_structures-list.svelte";
  import CenteredGrid from "$lib/components/layout/centered-grid.svelte";
  import EnsureStaffOrBizdev from "$lib/components/ensure-staff-or-bizdev.svelte";
  export let structures;
</script>

<svelte:head>
  <title>Structures | DORA</title>
</svelte:head>

<EnsureStaffOrBizdev>
  <CenteredGrid bgColor="bg-gray-bg">
    <h1>Structures</h1>

    <StructuresList {structures} readOnly={!$userInfo?.isStaff} />
  </CenteredGrid>
</EnsureStaffOrBizdev>
