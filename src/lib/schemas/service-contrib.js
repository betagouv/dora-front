import * as v from "./utils";

const shape1 = {
  structure: {
    default: null,
    required: true,
    rules: [v.isString(), v.maxStrLength(50)],
  },
  name: {
    default: "",
    required: true,
    rules: [v.isString(), v.maxStrLength(140)],
    post: [v.trim],
  },
  shortDesc: {
    default: "",
    rules: [v.isString(), v.maxStrLength(280)],
    post: [v.trim],
  },
  recurrence: {
    default: "",
    rules: [v.isString(), v.maxStrLength(140)],
    post: [v.trim],
  },
  fullDesc: { default: "", rules: [v.isString()], post: [v.trim] },
  category: {
    default: "",
    nullable: true,
    required: false,
    rules: [v.isString(), v.maxStrLength(2)],
  },
  subcategories: {
    default: [],
    rules: [v.isArray([v.isString(), v.maxStrLength(6)])],
  },
  kinds: {
    default: [],
    rules: [v.isArray([v.isString(), v.maxStrLength(2)])],
  },
};

const shape2 = {
  accessConditions: {
    default: [],
    rules: [v.isArray([v.isCustomizablePK()])],
  },
  concernedPublic: {
    default: [],
    rules: [v.isArray([v.isCustomizablePK()])],
  },
  requirements: {
    default: [],
    rules: [v.isArray([v.isCustomizablePK()])],
  },
  isCumulative: {
    default: true,
    rules: [v.isBool()],
  },
  hasFee: {
    default: false,
    rules: [v.isBool()],
  },
  feeDetails: {
    default: "",
    post: [v.trim],
    rules: [
      v.isString(),
      (name, value, data) => ({
        valid: !data.hasFee || value.length,
        msg: `Ce champ est requis`,
      }),
    ],
  },

  contactName: {
    default: "",
    rules: [v.isString(), v.maxStrLength(140)],
    post: [v.trim],
  },
  contactPhone: {
    default: "",
    pre: [v.removeAllSpaces],
    rules: [v.isPhone()],
  },
  contactEmail: {
    default: "",
    rules: [v.isEmail(), v.maxStrLength(255)],
    post: [v.lower, v.trim],
  },

  locationKinds: {
    default: [],
    rules: [v.isArray([v.isString(), v.maxStrLength(2)])],
  },
  remoteUrl: {
    default: "",
    rules: [v.isURL(), v.maxStrLength(200)],
    post: [v.trim],
  },
  city: {
    default: "",
    rules: [v.isString(), v.maxStrLength(255)],
    post: [v.trim],
  },
  address1: {
    default: "",
    rules: [v.isString(), v.maxStrLength(255)],
    post: [v.trim],
    dependents: ["postalCode"],
  },
  address2: {
    default: "",
    rules: [v.isString(), v.maxStrLength(255)],
    post: [v.trim],
  },
  postalCode: {
    default: "",
    rules: [v.isPostalCode()],
  },
};

export const step1Schema = shape1;
export const step2Schema = shape2;

export default {
  ...shape1,
  ...shape2,
};
