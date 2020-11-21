import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMenuCourseTypeComponent } from './edit-menu-course-type.component';

describe('EditMenuCourseTypeComponent', () => {
  let component: EditMenuCourseTypeComponent;
  let fixture: ComponentFixture<EditMenuCourseTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMenuCourseTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMenuCourseTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
