export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}
export interface Server {
  name:string;
  cpuState:number;
  memoryState:number;
  storageState:number;
  upTime:string;

}
export interface Module{
  name:string;
  cpuState:number;
  memoryState:number;
  storageState:number;
  upTime:string;
}
export interface Connectors{
  name:string,
  connectionStatus:number,
  exchangedMessage:number
}
export interface Archival{
  cpuState:number;
  memoryState:number;
  storageState:number;
  upTime:string;
}
