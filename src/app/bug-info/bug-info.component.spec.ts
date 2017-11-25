import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugInfoComponent } from './bug-info.component';

describe('BugInfoComponent', () => {
  let component: BugInfoComponent;
  let fixture: ComponentFixture<BugInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
