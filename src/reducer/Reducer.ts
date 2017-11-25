import {bugTodoAction} from "../action/BugAction";

export function rootReducre(state,action){
    switch(action.type){
        
        case bugTodoAction.Add_NewBug:
                action.todo.bugId=state.bugList.length+1;
                action.todo.status="Unassigned";

                return Object.assign({},state,{
                    bugList:state.bugList.concat(Object.assign({},action.todo)),
                    totalBug:state.bugList.length+1,
                    unassigned:state.unassigned+1,
                    assignedBug:state.assignedBug,
                    pendingBug:state.pendingBug,
                    completed:state.completed,
                    reopenBug:state.completed
                });

        case bugTodoAction.Assign_Bug:
            var bug=state.bugList.find(x=>x.bugId==action.bugNo);
            var currentStatus=bug.status;
            var index =state.bugList.indexOf(bug);
            
        
            if(bug.status=="Unassigned"){
                state.unassigned--;               
            }
            else if(bug.status=="Reopen"){
                state.reopenBug--;               
            }
            else if(bug.status=="Close"){
                state.completed--;               
            }
            else if(bug.status=="Pending"){
                state.pendingBug--;               
            }
            if(bug.status!="Assign"){
                state.assignedBug++;
            }
            
            bug.status=bugTodoAction.Assign_Bug;

            return Object.assign({},state,{
                bugList:[
                    ...state.bugList.slice(0,index),
                    Object.assign({},bug),
                    ...state.bugList.slice(index+1)
                ]
            });

       
            
        case bugTodoAction.Close_Bug:
        var bug=state.bugList.find(x=>x.bugId==action.bugNo);
        var currentStatus=bug.status;
        var index =state.bugList.indexOf(bug);
        
        if(bug.status=='Assign'){
            state.assignedBug--;               
        }
        else if(bug.status=="Unassigned"){
            state.unassigned--;               
        }
        else if(bug.status=="Reopen"){
            state.reopenBug--;               
        }
        else if(bug.status=="Pending"){
            state.pendingBug--;               
        }
        
        if(bug.status!="Close"){
            state.completed++;
        }
        
        bug.status=bugTodoAction.Close_Bug;

        return Object.assign({},state,{
            bugList:[
                ...state.bugList.slice(0,index),
                Object.assign({},bug),
                ...state.bugList.slice(index+1)
            ],
            lastUpdate:new Date()
        });
        
        case bugTodoAction.Pending_Bug:
        var bug=state.bugList.find(x=>x.bugId==action.bugNo);
        var currentStatus=bug.status;
        var index =state.bugList.indexOf(bug);
        
        if(bug.status=='Assign'){
            state.assignedBug--;               
        }
        else if(bug.status=="Unassigned"){
            state.unassigned--;               
        }
        else if(bug.status=="Reopen"){
            state.reopenBug--;               
        }
        else if(bug.status=="Close"){
            state.completed--;               
        }
        if(bug.status!="Pending"){
            state.pendingBug++;
        }
        
        bug.status=bugTodoAction.Pending_Bug;


        return Object.assign({},state,{
            bugList:[
                ...state.bugList.slice(0,index),
                Object.assign({},bug),
                ...state.bugList.slice(index+1)
            ],
            lastUpdate:new Date()
        });

        case bugTodoAction.Remove_All:
        return Object.assign({},state,{
            bugList:[],
            totalBug:0,
            unassigned:0,
            assignedBug:0,
            pendingBug:0,
            completed:0,
            reopenBug:0
        });

        case bugTodoAction.Reopen_Bug:
        var bug=state.bugList.find(x=>x.bugId==action.bugNo);
        var currentStatus=bug.status;
        var index =state.bugList.indexOf(bug);
        
        if(bug.status=='Assign'){
            state.assignedBug--;               
        }
        else if(bug.status=="Unassigned"){
            state.unassigned--;               
        }
        else if(bug.status=="Pending"){
            state.pendingBug--;               
        }
        else if(bug.status=="Close"){
            state.completed--;               
        }
        if(bug.status!="Reopen"){
            state.reopenBug++;
        }
        bug.status=bugTodoAction.Reopen_Bug;


        return Object.assign({},state,{
            bugList:[
                ...state.bugList.slice(0,index),
                Object.assign({},bug),
                ...state.bugList.slice(index+1)
            ],
            lastUpdate:new Date()
        });

        case bugTodoAction.Open_Model:
            return Object.assign({},state,{
                bugId:action.bugId
            });
    }    
    return state;
}