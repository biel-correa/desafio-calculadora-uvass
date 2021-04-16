import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueButtonComponent } from './value-button.component';

describe('ValueButtonComponent', () => {
  let component: ValueButtonComponent;
  let fixture: ComponentFixture<ValueButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValueButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
