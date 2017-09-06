import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import { IWidget } from '../models/IWidget';
@Injectable()
export class DashboardService {
    public delayMs = 500;
    // currentValue:number;
    // lastWeekValue:number;
    // issues?:number;
    // ticketsOpen?:number;
    // blank?:number;
    // down?:number;
    // paint?:number;
    // register?:number;
    // storePcs?:number;  
    public getNotification(): Observable<any> {
        return of(["Test Notification 1", "Test Notification 2","Test Notification 3"]);
    }
    public getOveralStorreHealth() : Observable<IWidget> {
        return of({currentValue:63,lastWeekValue:70,issues:4,ticketsOpen:10,blank:1});
    }
    public getUpcomingDeployments() : Observable<any> {
        const deployments = [{deviceName:"Google chrome",deploymentDate:"06-09-2017"},{deviceName:"Store Pc Menu",deploymentDate:"09-09-2017"}];
        return of({deployments:deployments,issues:4,ticketsOpen:10,blank:1});
    }
    public getInfrastureHealth() : Observable<any> {
        const components = [{name:"Google chrome",status:12},{name:"Component 1",status:50},{name:"Component 1",status:5}];
        return of({components:components,issues:4,ticketsOpen:10,blank:1});
    }
    public getRegisters() : Observable<any> {
        const components = [{name:"Google chrome",status:"success"},{name:"Component 1",status:"success"},{name:"Component 1",status:"success"}];
        return of({components:components,down:4,paint:10,storePcs:1});
    }
    public getAssistedCheckouts() : Observable<IWidget> {
        return of({currentValue:63,lastWeekValue:70,down:4,paint:10,storePcs:1});
    }
    public getMultiRolePcs() : Observable<IWidget> {
        return of({currentValue:63,lastWeekValue:70,register:4,paint:10,storePcs:1});
    }

  
}
