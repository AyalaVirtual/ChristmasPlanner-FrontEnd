import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockingStufferItemComponent } from './stocking-stuffer-item.component';

describe('StockingStufferItemComponent', () => {
  let component: StockingStufferItemComponent;
  let fixture: ComponentFixture<StockingStufferItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockingStufferItemComponent]
    });
    fixture = TestBed.createComponent(StockingStufferItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
