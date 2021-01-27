import { actionMock } from "../../../__mocks__/jsonFormsMock";
import formReducer from "./formReducer";

describe("formReducer", () => {
  it("should return the initial state (null)", () => {
    const nullActionMock = {
      type: actionMock.type,
      payload:{
        ...actionMock.payload,
        data: null
      }
    }
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
    actionMock.payload.data = { richiedente };
    expect(formReducer(undefined, actionMock)).toEqual({
      data: { richiedente },
    });
  });
});
