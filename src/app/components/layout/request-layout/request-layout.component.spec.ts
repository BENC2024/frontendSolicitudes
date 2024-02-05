import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestLayoutComponent } from './request-layout.component';

describe('RequestLayoutComponent', () => {
  let component: RequestLayoutComponent;
  let fixture: ComponentFixture<RequestLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestLayoutComponent]
    });
    fixture = TestBed.createComponent(RequestLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
