import { Node, NodeDimension, NodePosition } from "@swimlane/ngx-graph";

export interface Inode extends Node {
    id: string;
    position?: NodePosition;
    dimension?: NodeDimension;
    transform?: string;
    label?: string;
    component: string;
    data?: nodeData;
    meta?: nodeMeta;
}

interface nodeData {
   largeImage: boolean
}

interface nodeMeta {
    description?: string
    inbound?: Inode[],
    outbound?: Inode[]
}