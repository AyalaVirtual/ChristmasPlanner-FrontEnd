import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftSearchComponent } from './gift-search.component';

describe('SearchComponent', () => {
  let component: GiftSearchComponent;
  let fixture: ComponentFixture<GiftSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GiftSearchComponent]
    });
    fixture = TestBed.createComponent(GiftSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
