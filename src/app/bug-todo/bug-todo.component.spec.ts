import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugTodoComponent } from './bug-todo.component';

describe('BugTodoComponent', () => {
  let component: BugTodoComponent;
  let fixture: ComponentFixture<BugTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
