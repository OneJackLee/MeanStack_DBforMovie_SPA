import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Listafter1980Component } from './listafter1980.component';

describe('Listafter1980Component', () => {
  let component: Listafter1980Component;
  let fixture: ComponentFixture<Listafter1980Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Listafter1980Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Listafter1980Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
