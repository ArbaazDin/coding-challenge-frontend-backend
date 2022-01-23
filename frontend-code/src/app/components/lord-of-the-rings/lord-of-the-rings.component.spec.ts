import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LordOfTheRingsComponent } from './lord-of-the-rings.component';

describe('LordOfTheRingsComponent', () => {
  let component: LordOfTheRingsComponent;
  let fixture: ComponentFixture<LordOfTheRingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LordOfTheRingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LordOfTheRingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
