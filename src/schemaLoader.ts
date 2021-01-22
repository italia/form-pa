import { Actions, JsonSchema, UISchemaElement } from "@jsonforms/core";
import yaml from "js-yaml";
import { Store } from "redux";
import $RefParser from "@apidevtools/json-schema-ref-parser";
import { set } from "lodash";

const isYAML = process.env.YAML_SOURCE || true;

interface Mapping {
  readonly [key: string]: string;
}

const mapping: Mapping = {
  address: "residence.street",
  authnId: "authnId",
  companyName: "companyName",
  countyOfBirth: "birth_place.province",
  dateOfBirth: "date_of_birth",
  digitalAddress: "digitalAddress",
  email: "email",
  expirationDate: "expirationDate",
  familyName: "family_name",
  fiscalNumber: "tax_code",
  gender: "sex",
  idCard: "document.numero",
  // don't have a corresponding field
  ivaCode: "ivaCode",
  mobilePhone: "phone",
  name: "given_name",
  placeOfBirth: "birth_place.city",
  registeredOffice: "registeredOffice",
  spidCode: "spidCode",
};

const schemaURLQueryParam =
  new URLSearchParams(window.location.search).get("url_schema") || "";
const uischemaURLQueryParam =
  new URLSearchParams(window.location.search).get("url_uischema") || "";

const schemaURL: string =
  schemaURLQueryParam !== ""
    ? schemaURLQueryParam
    : isYAML
    ? "schema/schema.yaml"
    : "schema/schema.json";
const uischemaURL: string =
  uischemaURLQueryParam !== ""
    ? uischemaURLQueryParam
    : isYAML
    ? "schema/uischema.yaml"
    : "schema/uischema.json";

const fetchSchema = async (
  url: string,
  dereference: boolean = false
): Promise<$RefParser.JSONSchema | string> => {
  const text = await (await fetch(url)).text();
  const out = yaml.load(text);

  if (!out) {
    return "";
  }
  if (!dereference) {
    return out;
  }

  return await $RefParser.dereference(out);
};

const getDataFromURL = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const richiedente: { readonly [key: string]: string } = {};

  for (const [key, value] of urlParams.entries()) {
    if (!Object.keys(mapping).includes(key)) {
      continue;
    }
    set(richiedente, mapping[key], value);
  }

  return {
    richiedente,
  };
};

export const loadSchema = (store: Store): void => {
  fetchSchema(schemaURL)
    .then((schemaRetrieved) => {
      if (!schemaRetrieved) {
        return;
      }

      $RefParser.dereference(schemaRetrieved, (err, schema) => {
        if (err) {
          throw err;
        }
        if (schema === null) {
          throw new Error(`${schema}`);
        }

        fetchSchema(uischemaURL, true)
          .then((uischema) => {
            const ui: UISchemaElement = JSON.parse(JSON.stringify(uischema));
            const sc: JsonSchema = JSON.parse(JSON.stringify(schema));
            store.dispatch(Actions.init(getDataFromURL(), sc, ui));
          })
          .catch(() => {
            throw new Error(
              `fetchSchema error loading uischemaURL ${uischemaURL}`
            );
          });
      });
    })
    .catch(() => {
      throw new Error(`fetchSchema error loading schemaURL ${schemaURL}`);
    });
};
