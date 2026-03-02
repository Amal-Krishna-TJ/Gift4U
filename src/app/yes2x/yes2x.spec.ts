import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Yes2x } from './yes2x';

describe('Yes2x', () => {
  let component: Yes2x;
  let fixture: ComponentFixture<Yes2x>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Yes2x]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Yes2x);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
