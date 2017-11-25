import { Component, OnInit } from '@angular/core';
import {NgRedux,select} from "@angular-redux/store";
import {bugTodoAction} from "../../action/BugAction";
import {IBugState} from "../../store/BugStore";
import {IBugModel} from "../../model/BugModel";
@Component({
  selector: 'app-bug-todo',
  templateUrl: './bug-todo.component.html',
  styleUrls: ['./bug-todo.component.css']
})
export class BugTodoComponent implements OnInit {

  bugObject:IBugModel={
    bugId:0,
    description:"",
    project:"Car",
    priority:"Low",
    status:""
  }

  constructor(private ngRedux:NgRedux<IBugState>) {
   }

  ngOnInit() {
  }

  submitForm=()=>{
    this.ngRedux.dispatch({type:bugTodoAction.Add_NewBug,todo:this.bugObject});
  }

  clearList=()=>{
    this.ngRedux.dispatch({type:bugTodoAction.Remove_All,todo:this.bugObject});
  }

}
