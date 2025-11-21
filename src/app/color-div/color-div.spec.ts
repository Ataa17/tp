import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorDiv } from './color-div';

describe('ColorDiv', () => {
  let component: ColorDiv;
  let fixture: ComponentFixture<ColorDiv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorDiv]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorDiv);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
