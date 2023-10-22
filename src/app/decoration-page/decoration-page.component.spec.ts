import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecorationPageComponent } from './decoration-page.component';

describe('DecorationPageComponent', () => {
  let component: DecorationPageComponent;
  let fixture: ComponentFixture<DecorationPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DecorationPageComponent]
    });
    fixture = TestBed.createComponent(DecorationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
