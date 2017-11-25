import { Component, OnInit } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { IBugState } from '../../store/BugStore';
import { IBugModel } from '../../model/BugModel';
import { bugTodoAction } from '../../action/BugAction';

@Component({
  selector: 'app-bug-info',
  templateUrl: './bug-info.component.html',
  styleUrls: ['./bug-info.component.css']
})
export class BugInfoComponent implements OnInit {
  @select('bugId') bugId;
  @select('bugList') bugList;
  bugNumber:number;
  bugInfo:IBugModel;
  status:string="Assign";
  constructor(private ngRedux:NgRedux<IBugState>) {

    this.bugId.subscribe(data=>{
      this.bugList.subscribe(data1=>{
        this.bugNumber=data;
        this.bugInfo=data1.filter(x=>x.bugId==data)[0] 
      });
    });
    
   }

  ngOnInit() {
      
  }
  submit=()=>{
    this.ngRedux.dispatch({type:this.status,bugNo:this.bugNumber});
  }
  ChangeStatus=()=>{

  }

}
