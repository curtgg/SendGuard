import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SgSendPageComponent } from './sg-send-page.component';

describe('SgSendPageComponent', () => {
  let component: SgSendPageComponent;
  let fixture: ComponentFixture<SgSendPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SgSendPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SgSendPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
