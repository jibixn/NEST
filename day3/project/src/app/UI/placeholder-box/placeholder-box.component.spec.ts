import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderBoxComponent } from './placeholder-box.component';

describe('PlaceholderBoxComponent', () => {
  let component: PlaceholderBoxComponent;
  let fixture: ComponentFixture<PlaceholderBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaceholderBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceholderBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
