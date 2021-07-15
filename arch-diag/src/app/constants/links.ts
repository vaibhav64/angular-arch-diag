import { Iedge } from "../interfaces/edge.model";

export const links: Iedge[] = [
    {
      id: 'a',
      source: 'first',
      target: 'second',
      label: 'is parent of'
    },
    {
      id: 'b',
      source: 'first',
      target: 'third',
      label: 'custom label'
    },
    {
      id: 'c',
      source: 'first',
      target: 'fourth',
      label: 'custom label'
    }
  ];