import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockingStufferPageComponent } from './stocking-stuffer-page.component';

describe('StockingStufferPageComponent', () => {
  let component: StockingStufferPageComponent;
  let fixture: ComponentFixture<StockingStufferPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockingStufferPageComponent]
    });
    fixture = TestBed.createComponent(StockingStufferPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
