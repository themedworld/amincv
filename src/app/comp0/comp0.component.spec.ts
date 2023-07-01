import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp0Component } from './comp0.component';

describe('Comp0Component', () => {
  let component: Comp0Component;
  let fixture: ComponentFixture<Comp0Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Comp0Component]
    });
    fixture = TestBed.createComponent(Comp0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
