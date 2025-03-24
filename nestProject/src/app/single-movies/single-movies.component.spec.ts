import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMoviesComponent } from './single-movies.component';

describe('SingleMoviesComponent', () => {
  let component: SingleMoviesComponent;
  let fixture: ComponentFixture<SingleMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleMoviesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
