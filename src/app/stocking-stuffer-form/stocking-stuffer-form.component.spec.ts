import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockingStufferFormComponent } from './stocking-stuffer-form.component';

describe('StockingStufferFormComponent', () => {
  let component: StockingStufferFormComponent;
  let fixture: ComponentFixture<StockingStufferFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockingStufferFormComponent]
    });
    fixture = TestBed.createComponent(StockingStufferFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
