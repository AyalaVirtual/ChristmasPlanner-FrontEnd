import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftItemComponent } from './gift-item.component';

describe('GiftItemComponent', () => {
  let component: GiftItemComponent;
  let fixture: ComponentFixture<GiftItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GiftItemComponent]
    });
    fixture = TestBed.createComponent(GiftItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
