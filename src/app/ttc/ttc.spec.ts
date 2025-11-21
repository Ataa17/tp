import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ttc } from './ttc';

describe('Ttc', () => {
  let component: Ttc;
  let fixture: ComponentFixture<Ttc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ttc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ttc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
