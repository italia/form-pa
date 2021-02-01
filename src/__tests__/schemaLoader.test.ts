import * as React from "react";
import { getDataFromURL } from "../schemaLoader";

test("get data from URL and convert into standard ontology", async () => {
  const out = {
    richiedente: {
      residence: { street: "x" },
      authnId: "x",
      companyName: "x",
      birth_place: { province: "x", city: "x" },
      date_of_birth: "x",
      digitalAddress: "x",
      email: "x",
      expirationDate: "x",
      family_name: "x",
      tax_code: "x",
      sex: "x",
      document: { numero: "x" },
      ivaCode: "x",
      phone: "x",
      given_name: "x",
      registeredOffice: "x",
      spidCode: "x",
    },
  };
  function* g1(): IterableIterator<[string, string]> {
    yield ["address", "x"];
    yield ["authnId", "x"];
    yield ["companyName", "x"];
    yield ["countyOfBirth", "x"];
    yield ["dateOfBirth", "x"];
    yield ["digitalAddress", "x"];
    yield ["email", "x"];
    yield ["expirationDate", "x"];
    yield ["familyName", "x"];
    yield ["fiscalNumber", "x"];
    yield ["gender", "x"];
    yield ["idCard", "x"];
    yield ["ivaCode", "x"];
    yield ["mobilePhone", "x"];
    yield ["name", "x"];
    yield ["placeOfBirth", "x"];
    yield ["registeredOffice", "x"];
    yield ["spidCode", "x"];
  }
  jest.spyOn(URLSearchParams.prototype, "entries").mockReturnValue(g1());

  expect(getDataFromURL()).toEqual(out);
});
