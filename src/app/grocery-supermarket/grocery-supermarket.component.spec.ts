import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrocerySupermarketComponent } from './grocery-supermarket.component';

describe('GrocerySupermarketComponent', () => {
  let component: GrocerySupermarketComponent;
  let fixture: ComponentFixture<GrocerySupermarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrocerySupermarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrocerySupermarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
