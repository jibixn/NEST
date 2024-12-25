import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbatronComponent } from './jumbatron.component';

describe('JumbatronComponent', () => {
  let component: JumbatronComponent;
  let fixture: ComponentFixture<JumbatronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JumbatronComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JumbatronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
