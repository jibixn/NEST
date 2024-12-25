import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderBox2Component } from './placeholder-box2.component';

describe('PlaceholderBox2Component', () => {
  let component: PlaceholderBox2Component;
  let fixture: ComponentFixture<PlaceholderBox2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaceholderBox2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceholderBox2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
