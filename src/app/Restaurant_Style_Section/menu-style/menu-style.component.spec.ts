import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuStyleComponent } from './menu-style.component';

describe('MenuStyleComponent', () => {
  let component: MenuStyleComponent;
  let fixture: ComponentFixture<MenuStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
