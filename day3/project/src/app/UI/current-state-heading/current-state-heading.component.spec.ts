import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentStateHeadingComponent } from './current-state-heading.component';

describe('CurrentStateHeadingComponent', () => {
  let component: CurrentStateHeadingComponent;
  let fixture: ComponentFixture<CurrentStateHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentStateHeadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentStateHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
