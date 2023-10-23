import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DecorationSearchComponent } from './decoration-search.component';

describe('DecorationSearchComponent', () => {
  let component: DecorationSearchComponent;
  let fixture: ComponentFixture<DecorationSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DecorationSearchComponent]
    });
    fixture = TestBed.createComponent(DecorationSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
