import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoGreetComponent } from './logo-greet.component';

describe('LogoGreetComponent', () => {
  let component: LogoGreetComponent;
  let fixture: ComponentFixture<LogoGreetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoGreetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoGreetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
