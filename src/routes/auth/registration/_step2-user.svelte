<script>
  import { formErrors } from "$lib/validation.js";
  import { passwordRules } from "$lib/auth";
  import { accountSchema } from "$lib/schemas/auth.js";
  import { getApiURL } from "$lib/utils/api.js";

  import Button from "$lib/components/button.svelte";
  import Field from "$lib/components/forms/field.svelte";
  import Fieldset from "$lib/components/forms/fieldset.svelte";
  import Form from "$lib/components/forms/form.svelte";
  import Alert from "$lib/components/forms/alert.svelte";

  import { registrationInfo } from "./_store.js";

  export let currentStep;
  let requesting = false;

  const serverErrors = {
    // eslint-disable-next-line
    email: {
      invalid:
        "Cet utilisateur existe déjà.&nbsp;<a target='_blank' rel='noopener nofollow' class='underline' title='Ouverture dans une nouvelle fenêtre' href='https://aide.dora.fabrique.social.gouv.fr/fr/'>Nous contacter</a>.",
    },
  };

  function handleSubmit(validatedData) {
    plausible("inscription", { props: { step: "Création compte" } });
    const url = `${getApiURL()}/auth/register-structure-and-user/`;
    return fetch(url, {
      method: "POST",
      body: JSON.stringify({
        firstName: validatedData.firstName,
        lastName: validatedData.lastName,
        email: validatedData.email,
        password: validatedData.password,
        siret: validatedData.siret,
        newsletter: validatedData.newsletter,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json; version=1.0",
      },
    });
  }
  function handleSuccess() {
    currentStep = 3;
  }
</script>

<Form
  data={$registrationInfo}
  schema={accountSchema}
  serverErrorsDict={serverErrors}
  onSubmit={handleSubmit}
  onSuccess={handleSuccess}
  bind:requesting
>
  <Fieldset title="Informations personnelles" noTopPadding>
    {#each $formErrors.nonFieldErrors || [] as msg}
      <Alert label={msg} />
    {/each}
    <div class="relative flex flex-col gap-y-s32">
      <Field
        name="firstName"
        errorMessages={$formErrors.firstName}
        label="Votre prénom"
        vertical
        type="text"
        required
        placeholder="Aurélien"
        autocomplete="given-name"
        bind:value={$registrationInfo.firstName}
      />

      <Field
        name="lastName"
        errorMessages={$formErrors.lastName}
        label="Votre nom"
        vertical
        type="text"
        required
        placeholder="Durand"
        autocomplete="family-name"
        bind:value={$registrationInfo.lastName}
      />

      <Field
        name="email"
        description={$registrationInfo.isPoleEmploi
          ? "Une adresse en @pole-emploi.fr ou @pole-emploi.net est requise pour s’inscrire."
          : ""}
        errorMessages={$formErrors.email}
        label="Courriel"
        vertical
        type="email"
        required
        placeholder="Votre courriel"
        autocomplete="email"
        bind:value={$registrationInfo.email}
        allowHTMLError
      />
      <div
        class="flex flex-col justify-between gap-x-s32 md:flex-row lg:flex-col xl:flex-row"
      >
        <Field
          name="password"
          errorMessages={$formErrors.password}
          label="Mot de passe"
          vertical
          type="password"
          placeholder="••••••••"
          bind:value={$registrationInfo.password}
          autocomplete="new-password"
          passwordrules={passwordRules}
          required
        />
        <Field
          name="password2"
          errorMessages={$formErrors.password2}
          label="Répéter le mot de passe"
          vertical
          type="password"
          placeholder="••••••••"
          bind:value={$registrationInfo.password2}
          autocomplete="new-password"
          passwordrules={passwordRules}
          required
        />
      </div>
      <Field name="siret" type="hidden" value={$registrationInfo.siret} />
      <Field
        label="S'abonner à l'infolettre"
        vertical
        type="toggle"
        bind:value={$registrationInfo.newsletter}
        placeholder=""
      />

      <Button
        type="submit"
        label="Demandez votre accès"
        disabled={requesting}
        preventDefaultOnMouseDown
      />
    </div>
  </Fieldset>
</Form>
