import { Component, OnInit } from '@angular/core';
import {NgRedux,select} from "@angular-redux/store";
import {bugTodoAction} from "../../action/BugAction";
import {IBugState} from "../../store/BugStore";
import {IBugModel} from "../../model/BugModel";
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-bug-status',
  templateUrl: './bug-status.component.html',
  styleUrls: ['./bug-status.component.css']
})
export class BugStatusComponent implements OnInit {

  @select('totalBug') totalBug;
  @select('assignedBug') assignBug;
  @select('unassigned') unassignedBug;
  @select('pendingBug') pendingBug;
  @select('reopenBug') reopenBug;
  @select('completed') completedBug;
  constructor(private ngRedux:NgRedux<IBugState>) {
  
   }

  ngOnInit() {
  }

}
