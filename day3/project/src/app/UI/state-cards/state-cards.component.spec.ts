import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateCardsComponent } from './state-cards.component';

describe('StateCardsComponent', () => {
  let component: StateCardsComponent;
  let fixture: ComponentFixture<StateCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StateCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StateCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
