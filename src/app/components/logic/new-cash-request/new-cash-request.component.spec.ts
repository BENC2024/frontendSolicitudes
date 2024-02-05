import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCashRequestComponent } from './new-cash-request.component';

describe('NewCashRequestComponent', () => {
  let component: NewCashRequestComponent;
  let fixture: ComponentFixture<NewCashRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewCashRequestComponent]
    });
    fixture = TestBed.createComponent(NewCashRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
