import { Component, InputHTMLAttributes } from "react";

declare module "design-react-kit" {
  export class Input<P = {}> extends Component<
    P & InputHTMLAttributes<HTMLInputElement>
  > {
    public click(): void;
  }
}
