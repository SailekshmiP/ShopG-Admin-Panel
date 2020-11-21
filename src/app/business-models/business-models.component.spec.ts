import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessModelsComponent } from './business-models.component';

describe('BusinessModelsComponent', () => {
  let component: BusinessModelsComponent;
  let fixture: ComponentFixture<BusinessModelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessModelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
