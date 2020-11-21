import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMenuCourseTypeComponent } from './add-menu-course-type.component';

describe('AddMenuCourseTypeComponent', () => {
  let component: AddMenuCourseTypeComponent;
  let fixture: ComponentFixture<AddMenuCourseTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMenuCourseTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMenuCourseTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
