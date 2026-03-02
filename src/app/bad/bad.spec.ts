import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bad } from './bad';

describe('Bad', () => {
  let component: Bad;
  let fixture: ComponentFixture<Bad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Bad]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bad);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
