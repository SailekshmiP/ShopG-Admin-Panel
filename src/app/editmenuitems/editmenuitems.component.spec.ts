import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmenuitemsComponent } from './editmenuitems.component';

describe('EditmenuitemsComponent', () => {
  let component: EditmenuitemsComponent;
  let fixture: ComponentFixture<EditmenuitemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditmenuitemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmenuitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
