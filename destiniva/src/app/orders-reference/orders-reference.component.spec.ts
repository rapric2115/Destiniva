import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersReferenceComponent } from './orders-reference.component';

describe('OrdersReferenceComponent', () => {
  let component: OrdersReferenceComponent;
  let fixture: ComponentFixture<OrdersReferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersReferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
