import { actionMock } from "../../../__mocks__/jsonFormsMock";
import formReducer from "./formReducer";

describe("formReducer", () => {
  it("should return the initial state (null)", () => {
    const nullActionMock = {
      payload: {
        ...actionMock.payload,
        data: null,
      },
      type: actionMock.type,
    };
    expect(formReducer(undefined, nullActionMock)).toEqual({
      data: {},
    });
  });

  it("should return the initial state (empty object)", () => {
    expect(formReducer(undefined, actionMock)).toEqual({
      data: {},
    });
  });

  it("should return a sample data", () => {
    const richiedente = {
      richiedente: {
        givenName: "Test",
      },
    };
    const dataActionMock = {
      payload: {
        ...actionMock.payload,
        data: richiedente,
      },
      type: actionMock.type,
    };
    expect(formReducer(undefined, dataActionMock)).toEqual({
      data: { ...richiedente },
    });
  });
});
