<script>
  import LinkButton from "$lib/components/link-button.svelte";
  import Label from "$lib/components/label.svelte";
  import { capitalize, shortenString } from "$lib/utils";
  import {
    homeIcon,
    // briefcaseIcon,
    addCircleIcon,
  } from "$lib/icons";

  export let structures;
  export let readOnly = true;
</script>

<div class="flex flex-col gap-s12">
  {#each structures as structure}
    <div class="flex flex-row gap-s16 rounded-md bg-white p-s16">
      <div class="flex grow flex-row items-center">
        <a href="/structures/{structure.slug}">
          <h5>
            {shortenString(capitalize(structure.name))}
            {#if structure.typologyDisplay}({structure.typologyDisplay}){/if}
          </h5>
        </a>
      </div>
      {#if structure.department}
        <Label label={structure.department || " "} smallIcon icon={homeIcon} />
      {/if}
      <!-- <Label
          label={`${structure.numServices} fiche(s)`}
          smallIcon
          icon={briefcaseIcon} /> -->
      {#if !readOnly}
        <LinkButton
          label="Ajouter un service"
          to="/services/creer?structure={structure.slug}"
          icon={addCircleIcon}
          iconOnRight
          noBackground
        />
      {/if}
      <LinkButton label="Voir" to="/structures/{structure.slug}" noBackground />
    </div>
  {/each}
</div>
