import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCashRequestComponent } from './list-cash-request.component';

describe('ListCashRequestComponent', () => {
  let component: ListCashRequestComponent;
  let fixture: ComponentFixture<ListCashRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCashRequestComponent]
    });
    fixture = TestBed.createComponent(ListCashRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
