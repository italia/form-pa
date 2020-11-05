export interface Field {
  scope: string;
  label: string;
  type?: string;
  elements?: Array<Field>
}

export type Fields = Array<Field>;
