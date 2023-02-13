export interface ServerStatus{
  name:string;
  connectionStatus:number;
  cpuState:number;
}
export interface ModuleStatus{
  name:string,
  connectionStatus:number,
  cpuState:number
}
export interface Connectors{
  name:string,
  connectionStatus:number,
  cpuState:number,
  exchangedMessage:number
}
export interface ArchivalOutcome{
  name:string,
  connectionStatus:number,
  cpuState:number
}
