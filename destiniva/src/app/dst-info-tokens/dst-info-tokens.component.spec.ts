import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DstInfoTokensComponent } from './dst-info-tokens.component';

describe('DstInfoTokensComponent', () => {
  let component: DstInfoTokensComponent;
  let fixture: ComponentFixture<DstInfoTokensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DstInfoTokensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DstInfoTokensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
