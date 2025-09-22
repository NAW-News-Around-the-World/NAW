import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Es } from './es';

describe('Es', () => {
  let component: Es;
  let fixture: ComponentFixture<Es>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Es],
    }).compileComponents();

    fixture = TestBed.createComponent(Es);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
