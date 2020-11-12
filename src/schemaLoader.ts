import { Actions } from "@jsonforms/core";
import yaml from "js-yaml";
import { Store } from "redux";
import $RefParser from "@apidevtools/json-schema-ref-parser";

const isYAML = process.env.YAML_SOURCE || true;

interface Mapping {
  [key: string]: string;
}

const mapping: Mapping = {
  authnId: "authnId",
  spidCode: "spidCode",
  name: "given_name",
  familyName: "family_name",
  placeOfBirth: "birth_place.city",
  countyOfBirth: "birth_place.province",
  dateOfBirth: "date_of_birth",
  gender: "sex",
  fiscalNumber: "tax_code",
  idCard: "document.numero",
  mobilePhone: "phone",
  email: "email",
  address: "residence.street",
  // don't have a corresponding field
  ivaCode: "ivaCode",
  companyName: "companyName",
  registeredOffice: "registeredOffice",
  expirationDate: "expirationDate",
  digitalAddress: "digitalAddress",
};

let schemaURL: string = "",
  uischemaURL: string = "";

if (isYAML) {
  schemaURL = "schema/schema.yaml";
  uischemaURL = "schema/uischema.yaml";
} else {
  schemaURL = "schema/schema.json";
  uischemaURL = "schema/uischema.json";
}

schemaURL =
  new URLSearchParams(window.location.search).get("url_schema") || schemaURL;
uischemaURL =
  new URLSearchParams(window.location.search).get("url_uischema") ||
  uischemaURL;

const fetchSchema = async (url: string, dereference: boolean = false) => {
  const text = await (await fetch(url)).text();
  const out = yaml.safeLoad(text);

  if (!out) return;
  if (!dereference) return out;

  try {
    return await $RefParser.dereference(out);
  } catch (err) {
    console.error("Cannot dereference", err);
    throw err;
  }
};

const setToValue = (obj: Mapping, path: string, value: string): void => {
  const a = path.split(".");
  let o: any = obj;
  while (a.length - 1) {
    const n = a.shift() || "undef";
    if (!(n in o)) o[n] = {};
    o = o[n];
  }
  o[a[0]] = value;
};

const getDataFromURL = () => {
  const urlParams = new URLSearchParams(window.location.search);
  let richiedente: { [key: string]: string } = {};

  for (const [key, value] of urlParams.entries()) {
    if (!Object.keys(mapping).includes(key)) {
      continue;
    }
    setToValue(richiedente, mapping[key], value);
  }

  return {
    richiedente,
  };
};

export const loadSchema = (store: Store) => {
  fetchSchema(schemaURL).then((schemaRetrieved) => {
    if (!schemaRetrieved) {
      return;
    }

    $RefParser.dereference(schemaRetrieved, (err: any, schema: any) => {
      if (err) {
        console.error(err);
        throw err;
      }
      
      fetchSchema(uischemaURL, true).then((uischema: any) => {
        store.dispatch(Actions.init(getDataFromURL(), schema, uischema));
      });
    });
  });
};
