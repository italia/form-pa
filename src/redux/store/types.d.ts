import { StateType, ActionType } from "typesafe-actions";

declare module "MyTypes" {
  export type Store = StateType<typeof import("./").default>;
  export type RootAction = ActionType<typeof import("../actions")>;
  export type RootState = StateType<
    ReturnType<typeof import("../reducers").default>
  >;
  export type FormState = StateType<
    ReturnType<typeof import("../reducers/formReducer").default>
  >;
}

declare module "typesafe-actions" {
  interface Types {
    readonly RootAction: ActionType<typeof import("../actions")>;
  }
}
