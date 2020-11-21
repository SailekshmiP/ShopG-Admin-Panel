import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantMenuPointedToShopComponent } from './restaurant-menu-pointed-to-shop.component';

describe('RestaurantMenuPointedToShopComponent', () => {
  let component: RestaurantMenuPointedToShopComponent;
  let fixture: ComponentFixture<RestaurantMenuPointedToShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantMenuPointedToShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantMenuPointedToShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
