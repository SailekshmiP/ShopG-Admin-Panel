import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMenuStyleComponent } from './edit-menu-style.component';

describe('EditMenuStyleComponent', () => {
  let component: EditMenuStyleComponent;
  let fixture: ComponentFixture<EditMenuStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMenuStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMenuStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
