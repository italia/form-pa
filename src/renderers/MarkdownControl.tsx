import * as React from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import { Markdown } from './Markdown';

interface MarkdownControlProps {
  data: any;
  path: string;
  uischema: any;
}

const MarkdownControl = ({ data, path, uischema }: MarkdownControlProps) => (
  <Markdown
    data={data}
    path={path}
    uischema={uischema}
  />
);

export default withJsonFormsControlProps(MarkdownControl);
