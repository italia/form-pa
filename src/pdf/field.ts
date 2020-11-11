export interface Field {
  scope: string;
  label: string;
  type?: string;
  value?: string | boolean;
  elements?: Array<Field>;
}

export type Fields = Array<Field>;
