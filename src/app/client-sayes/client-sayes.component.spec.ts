import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSayesComponent } from './client-sayes.component';

describe('ClientSayesComponent', () => {
  let component: ClientSayesComponent;
  let fixture: ComponentFixture<ClientSayesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientSayesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSayesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
