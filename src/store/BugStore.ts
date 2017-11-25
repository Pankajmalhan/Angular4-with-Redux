import { IBugModel } from "../model/BugModel";

export interface IBugState {
    bugList:IBugModel[],
    totalBug:number,
    unassigned:number,
    assignedBug:number,
    pendingBug:number,
    completed:number,
    reopenBug:number,
    bugId:number  
}

export const INITIAL_STATE:IBugState={
    bugList:[],
    totalBug:0,
    unassigned:0,
    assignedBug:0,
    pendingBug:0,
    completed:0,
    reopenBug:0 ,
    bugId:0 
}