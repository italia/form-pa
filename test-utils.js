import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { Provider } from "react-redux";
// Import your own store
import localStore from "./src/redux/store";

const render = (ui, { store = localStore, ...renderOptions } = {}) => {
  const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
