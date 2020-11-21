import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSubCourseComponent } from './menu-sub-course.component';

describe('MenuSubCourseComponent', () => {
  let component: MenuSubCourseComponent;
  let fixture: ComponentFixture<MenuSubCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuSubCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSubCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
