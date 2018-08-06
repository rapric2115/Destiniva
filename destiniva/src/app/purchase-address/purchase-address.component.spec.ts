import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseAddressComponent } from './purchase-address.component';

describe('PurchaseAddressComponent', () => {
  let component: PurchaseAddressComponent;
  let fixture: ComponentFixture<PurchaseAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
