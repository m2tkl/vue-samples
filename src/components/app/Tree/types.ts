export type NodeData = {
  id: string;
  name: string;
  opened: boolean;
  checked: boolean;
  children: NodeData[];
}
