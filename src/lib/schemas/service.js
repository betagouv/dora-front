import * as v from "./utils";

export const SERVICE_STATUSES = {
  draft: "DRAFT",
  suggestion: "SUGGESTION",
  published: "PUBLISHED",
  archived: "ARCHIVED",
};

const fields = {
  contrib: [
    "siret",
    "categories",
    "subcategories",
    "kinds",
    "name",
    "shortDesc",
    "fullDesc",
    "accessConditions",
    "concernedPublic",
    "requirements",
    "isCumulative",
    "hasFee",
    "feeDetails",
    "contactName",
    "contactPhone",
    "contactEmail",
    "locationKinds",
    "remoteUrl",
    "city",
    "address1",
    "address2",
    "postalCode",
  ],
  service: [
    "structure",
    "categories",
    "subcategories",
    "kinds",
    "name",
    "shortDesc",
    "fullDesc",
    "accessConditions",
    "concernedPublic",
    "requirements",
    "isCumulative",
    "hasFee",
    "feeDetails",
    "beneficiariesAccessModes",
    "beneficiariesAccessModesOther",
    "coachOrientationModes",
    "coachOrientationModesOther",
    "credentials",
    "forms",
    "onlineForm",
    "contactName",
    "contactPhone",
    "contactEmail",
    "isContactInfoPublic",
    "locationKinds",
    "remoteUrl",
    "city",
    "address1",
    "address2",
    "postalCode",
    "diffusionZoneType",
    "diffusionZoneDetails",
    "qpvOrZrr",
    "startDate",
    "endDate",
    "recurrence",
    "suspensionDate",
  ],
  model: [
    "structure",
    "categories",
    "subcategories",
    "kinds",
    "name",
    "shortDesc",
    "fullDesc",
    "accessConditions",
    "concernedPublic",
    "requirements",
    "isCumulative",
    "hasFee",
    "feeDetails",
    "beneficiariesAccessModes",
    "beneficiariesAccessModesOther",
    "coachOrientationModes",
    "coachOrientationModesOther",
    "credentials",
    "forms",
    "onlineForm",
    "recurrence",
    "suspensionDate",
  ],
};

const fieldsRequired = {
  contrib: [
    "siret",
    "categories",
    "subcategories",
    "kinds",
    "name",
    "shortDesc",
  ],
  service: [
    "structure",
    "categories",
    "subcategories",
    "kinds",
    "name",
    "shortDesc",
    "coachOrientationModes",
    "diffusionZoneType",
    "locationKinds",
    "contactEmail",
  ],
  draft: ["structure", "name"],
  model: [
    "structure",
    "categories",
    "subcategories",
    "kinds",
    "name",
    "shortDesc",
    "coachOrientationModes",
  ],
};

const schema = {
  siret: {
    default: "",
    rules: [v.isSiret()],
  },
  structure: {
    name: "structure",
    default: "",
    rules: [v.isString(), v.maxStrLength(50)],
  },
  categories: {
    name: "th??matiques",
    default: [],
    rules: [v.isArray([v.isString(), v.maxStrLength(255)])],
  },
  subcategories: {
    name: "besoins",
    default: [],
    rules: [v.isArray([v.isString(), v.maxStrLength(255)])],
  },
  kinds: {
    name: "types",
    default: [],
    rules: [v.isArray([v.isString(), v.maxStrLength(255)])],
  },
  name: {
    name: "titre",
    default: "",
    rules: [v.isString(), v.maxStrLength(140)],
    post: [v.trim],
  },
  shortDesc: {
    name: "r??sum??",
    default: "",
    rules: [v.isString(), v.maxStrLength(280)],
    post: [v.trim],
  },
  recurrence: {
    name: "fr??quence et horaires",
    default: "",
    rules: [v.isString(), v.maxStrLength(140)],
    post: [v.trim],
  },
  fullDesc: {
    name: "description",
    default: "",
    rules: [v.isString()],
    post: [v.trim],
  },
  accessConditions: {
    name: "crit??res",
    default: [],
    rules: [v.isArray([v.isCustomizablePK()])],
  },
  concernedPublic: {
    name: "profils",
    default: [],
    rules: [v.isArray([v.isCustomizablePK()])],
  },
  requirements: {
    name: "pr??-requis ou comp??tences",
    default: [],
    rules: [v.isArray([v.isCustomizablePK()])],
  },
  isCumulative: {
    name: "cumulable",
    default: true,
    rules: [v.isBool()],
  },
  hasFee: {
    name: "frais ?? charge",
    default: false,
    rules: [v.isBool()],
  },
  feeDetails: {
    name: "frais ?? charge (d??tail)",
    default: "",
    post: [v.trim],
    rules: [
      v.isString(),
      (name, value, data) => ({
        valid: !data.hasFee || value.length,
        msg: `Information requise`,
      }),
    ],
  },
  beneficiariesAccessModes: {
    name: "pour les b??n??ficiaires",
    default: [],
    rules: [v.isArray([v.isString(), v.maxStrLength(255)])],
  },
  beneficiariesAccessModesOther: {
    name: "pour les b??n??ficiaires (autre)",
    default: "",
    rules: [
      v.isString(),
      v.maxStrLength(280),
      (name, value, data) => ({
        valid: data.beneficiariesAccessModes.includes("autre")
          ? !!value.length
          : true,
        msg: `Information requise`,
      }),
    ],
  },
  coachOrientationModes: {
    name: "pour les accompagnateurs",
    default: [],
    rules: [v.isArray([v.isString(), v.maxStrLength(255)])],
  },
  coachOrientationModesOther: {
    name: "pour les accompagnateurs (autre)",
    default: "",
    rules: [
      v.isString(),
      v.maxStrLength(280),
      (name, value, data) => ({
        valid: data.coachOrientationModes.includes("autre")
          ? !!value.length
          : true,
        msg: `Information requise`,
      }),
    ],
  },

  credentials: {
    name: "justificatifs ?? fournir",
    default: [],
    rules: [v.isArray([v.isCustomizablePK()])],
  },
  forms: {
    name: "documents ?? compl??ter",
    default: [],
    rules: [v.isArray([v.isString(), v.maxStrLength(1024)])],
  },
  onlineForm: {
    name: "lien",
    default: "",
    rules: [v.isURL(), v.maxStrLength(200)],
    post: [v.trim],
  },
  contactName: {
    name: "pr??nom et nom",
    default: "",
    rules: [v.isString(), v.maxStrLength(140)],
    post: [v.trim],
  },
  contactPhone: {
    name: "t??l??phone",
    default: "",
    pre: [v.removeAllNonDigits],
    rules: [v.isPhone()],
  },
  contactEmail: {
    name: "email",
    default: "",
    rules: [v.isEmail(), v.maxStrLength(255)],
    post: [v.lower, v.trim],
  },
  isContactInfoPublic: {
    name: "rendre public",
    default: false,
    rules: [v.isBool()],
  },

  locationKinds: {
    name: "Mode d???accueil",
    default: [],
    rules: [v.isArray([v.isString(), v.maxStrLength(255)])],
  },
  remoteUrl: {
    name: "lien visioconf??rence",
    default: "",
    rules: [v.isURL(), v.maxStrLength(200)],
    post: [v.trim],
  },
  city: {
    name: "ville",
    default: "",
    rules: [
      v.isString(),
      v.maxStrLength(255),
      (name, value, data) => ({
        valid: data.locationKinds.includes("en-presentiel")
          ? !!value.length
          : true,
        msg: `Information requise`,
      }),
    ],
    post: [v.trim],
  },
  address1: {
    name: "adresse",
    default: "",
    rules: [
      v.isString(),
      v.maxStrLength(255),
      (name, value, data) => ({
        valid: data.locationKinds.includes("en-presentiel")
          ? !!value.length
          : true,
        msg: `Information requise`,
      }),
    ],
    post: [v.trim],
    dependents: ["postalCode"],
  },
  address2: {
    name: "compl??ment d'adresse",
    default: "",
    rules: [v.isString(), v.maxStrLength(255)],
    post: [v.trim],
  },
  postalCode: {
    name: "code postal",
    default: "",
    rules: [
      v.isPostalCode(),
      (name, value, data) => ({
        valid: data.locationKinds.includes("en-presentiel")
          ? !!value.length
          : true,
        msg: `Information requise`,
      }),
    ],
  },
  diffusionZoneType: {
    name: "p??rim??tre",
    default: "",
    rules: [v.isString(), v.maxStrLength(10)],
  },

  diffusionZoneDetails: {
    name: "territoire",
    default: "",
    rules: [
      v.isString(),
      v.maxStrLength(9),
      (name, value, data) => ({
        valid:
          data.diffusionZoneType && data.diffusionZoneType !== "country"
            ? !!value.length
            : true,
        msg: `Information requise`,
      }),
    ],
  },
  qpvOrZrr: {
    name: "uniquement QPV ou ZRR",
    default: false,
    rules: [v.isBool()],
  },
  startDate: {
    name: "date de d??but",
    default: null,
    rules: [v.isDate()],
    dependents: ["endDate"],
    post: [v.nullEmpty],
  },
  endDate: {
    name: "date de fin",
    default: null,
    rules: [
      v.isDate(),
      (name, value, data) => ({
        valid: !data.startDate || new Date(value) >= new Date(data.startDate),
        msg: `La date de fin doit ??tre post??rieure ?? la date de d??but`,
      }),
    ],
    post: [v.nullEmpty],
  },
  suspensionDate: {
    name: "date de fin",
    default: null,
    rules: [v.isDate()],
    post: [v.nullEmpty],
  },
};

export const suggestionSchema = {
  fullName: {
    default: "",
    required: true,
    rules: [v.isString(), v.maxStrLength(140)],
    post: [v.trim],
  },
  email: {
    default: "",
    required: true,
    rules: [v.isEmail(), v.maxStrLength(255)],
    post: [v.lower, v.trim],
  },
  message: {
    default: "",
    required: true,
    rules: [v.isString()],
  },
};

export const serviceSchema = v.formatSchema(
  schema,
  fields.service,
  fieldsRequired.service
);

export const modelSchema = v.formatSchema(
  schema,
  fields.model,
  fieldsRequired.model
);

export const contribSchema = v.formatSchema(
  schema,
  fields.contrib,
  fieldsRequired.contrib
);

export const draftSchema = v.formatSchema(
  schema,
  fields.service,
  fieldsRequired.draft
);
