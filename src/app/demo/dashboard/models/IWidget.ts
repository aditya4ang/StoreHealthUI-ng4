export interface IWidget{
    currentValue:number;
    lastWeekValue:number;
    issues?:number;
    ticketsOpen?:number;
    blank?:number;
    down?:number;
    paint?:number;
    register?:number;
    storePcs?:number;    
}

export interface IDeployment{
    deviceName:string;
    deploymentDate:string;
}