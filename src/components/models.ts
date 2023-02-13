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
  upTime:string;

}
export interface Module{
  name:string,
  cpuState:number
}
export interface Connectors{
  name:string,
  connectionStatus:number,
  exchangedMessage:number
}
export interface ArchivalOutcome{
  name:string,
  connectionStatus:number,
  cpuState:number
}
