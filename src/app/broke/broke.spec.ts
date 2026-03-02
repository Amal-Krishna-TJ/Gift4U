import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Broke } from './broke';

describe('Broke', () => {
  let component: Broke;
  let fixture: ComponentFixture<Broke>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Broke]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Broke);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
