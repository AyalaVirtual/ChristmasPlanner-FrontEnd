import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockingStufferSearchComponent } from './stocking-stuffer-search.component';

describe('StockingStufferSearchComponent', () => {
  let component: StockingStufferSearchComponent;
  let fixture: ComponentFixture<StockingStufferSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockingStufferSearchComponent]
    });
    fixture = TestBed.createComponent(StockingStufferSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
