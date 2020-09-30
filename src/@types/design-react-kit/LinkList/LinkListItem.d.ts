import { Component } from "react";
export { default as LinkListItem } from "src/components/LinkList/LinkListItem";

declare module "design-react-kit" {
  import * as React from "react";
  export type LinkListItemTag = ((...args: any[]) => any) | string;
  export interface LinkListItemProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
    /**
     * Indica se l'elemento è attivo o no
     */
    active?: boolean;
    /**
     * Indica se l'elemento è disabilitato o no
     */
    disabled?: boolean;
    /**
     * Indica se l'elemento è un titolo.
     */
    header?: boolean;
    /**
     * Indica se l'elemento è un divisore
     */
    divider?: boolean;
    /**
     * Utilizzarlo in caso di utilizzo di componenti personalizzati
     */
    tag?: LinkListItemTag;
    /**
     * Classi aggiuntive da usare per il componente LinkListItem
     */
    className?: any;
    /**
     * Indica il link a cui l'elemento deve puntare.
     */
    href?: string;
    /**
     * Indica la taglia/grandezza dell'elemento
     */
    size?: string;
  }

  const LinkListItem: React.FC<LinkListItemProps>;

  export {default as LinkListItem};
}
