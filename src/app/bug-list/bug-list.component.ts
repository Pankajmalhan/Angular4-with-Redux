import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IBugState } from '../../store/BugStore';
import { bugTodoAction } from '../../action/BugAction';

@Component({
  selector: 'app-bug-list',
  templateUrl: './bug-list.component.html',
  styleUrls: ['./bug-list.component.css']
})
export class BugListComponent implements OnInit {

  @select('bugList') bugList;
  constructor(private ngRedux:NgRedux<IBugState>) {

   }

  ngOnInit() {
  }

  openPopupModel=(bugId)=>{
      this.ngRedux.dispatch({type:bugTodoAction.Open_Model,bugId:bugId})
  }
}
