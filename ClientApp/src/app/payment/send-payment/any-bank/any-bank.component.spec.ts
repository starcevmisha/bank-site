import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnyBankComponent } from './any-bank.component';

describe('AnyBankComponent', () => {
  let component: AnyBankComponent;
  let fixture: ComponentFixture<AnyBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnyBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnyBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
