import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TpyeFeaturesComponent } from './tpye-features.component';

describe('TpyeFeaturesComponent', () => {
  let component: TpyeFeaturesComponent;
  let fixture: ComponentFixture<TpyeFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpyeFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TpyeFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
