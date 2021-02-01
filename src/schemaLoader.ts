import { JsonSchema, UISchemaElement } from "@jsonforms/core";
import yaml from "js-yaml";
import $RefParser from "@apidevtools/json-schema-ref-parser";
import { set } from "lodash";
import { JsonFormsInitStateProps } from "@jsonforms/react";
import {
  materialRenderers,
  materialCells,
} from "@jsonforms/material-renderers";
import markdownControlTester from "./renderers/markdownControlTester";
import MarkdownControl from "./renderers/MarkdownControl";

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

interface Richiedente {
  readonly richiedente: {
    readonly [key: string]: string;
  };
}

export const getDataFromURL = (): Richiedente => {
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

export const loadSchema = async (): Promise<JsonFormsInitStateProps> => {
  const schemaRetrieved = await fetchSchema(schemaURL)
    .then((sr) => {
      if (!sr) {
        throw new Error(`${sr}`);
      }
      return sr;
    })
    .catch(() => {
      throw new Error(`fetchSchema error loading schemaURL ${schemaURL}`);
    });

  const schema = await $RefParser.dereference(schemaRetrieved);

  const uischema = await fetchSchema(uischemaURL, true)
    .then((uischemaa) => uischemaa)
    .catch(() => {
      throw new Error(`fetchSchema error loading uischemaURL ${uischemaURL}`);
    });

  const ui: UISchemaElement = JSON.parse(JSON.stringify(uischema));
  const sc: JsonSchema = JSON.parse(JSON.stringify(schema));
  return {
    cells: materialCells,
    data: getDataFromURL(),
    renderers: [
      ...materialRenderers,
      { renderer: MarkdownControl, tester: markdownControlTester },
    ],
    schema: sc,
    uischema: ui,
  };
};
