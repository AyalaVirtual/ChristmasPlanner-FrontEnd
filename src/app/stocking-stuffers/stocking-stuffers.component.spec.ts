import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockingStuffersComponent } from './stocking-stuffers.component';

describe('StockingStuffersComponent', () => {
  let component: StockingStuffersComponent;
  let fixture: ComponentFixture<StockingStuffersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockingStuffersComponent]
    });
    fixture = TestBed.createComponent(StockingStuffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
