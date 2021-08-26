import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SgButtonConnectorComponent } from './sg-button-connector.component';

describe('SgButtonConnectorComponent', () => {
  let component: SgButtonConnectorComponent;
  let fixture: ComponentFixture<SgButtonConnectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SgButtonConnectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SgButtonConnectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
