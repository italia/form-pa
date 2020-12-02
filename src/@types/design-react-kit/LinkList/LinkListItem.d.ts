/* form-pa: Send forms to PAs with SPID
 * Copyright (C) 2020 Dipartimento per la Trasformazione Digitale
 *                    Presidenza del Consiglio dei Ministri

 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.

 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.

 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

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
