import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvilworkComponent } from './cvilwork.component';

describe('CvilworkComponent', () => {
  let component: CvilworkComponent;
  let fixture: ComponentFixture<CvilworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvilworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvilworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
