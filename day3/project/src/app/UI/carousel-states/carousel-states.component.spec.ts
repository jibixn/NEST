import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselStatesComponent } from './carousel-states.component';

describe('CarouselStatesComponent', () => {
  let component: CarouselStatesComponent;
  let fixture: ComponentFixture<CarouselStatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselStatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
