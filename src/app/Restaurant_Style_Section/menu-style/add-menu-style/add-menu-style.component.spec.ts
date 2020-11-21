import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMenuStyleComponent } from './add-menu-style.component';

describe('AddMenuStyleComponent', () => {
  let component: AddMenuStyleComponent;
  let fixture: ComponentFixture<AddMenuStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMenuStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMenuStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
