import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugStatusComponent } from './bug-status.component';

describe('BugStatusComponent', () => {
  let component: BugStatusComponent;
  let fixture: ComponentFixture<BugStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
