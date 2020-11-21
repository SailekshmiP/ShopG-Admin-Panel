import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCourseTypeComponent } from './menu-course-type.component';

describe('MenuCourseTypeComponent', () => {
  let component: MenuCourseTypeComponent;
  let fixture: ComponentFixture<MenuCourseTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuCourseTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCourseTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
