import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SgLogoComponent } from './sg-logo.component';

describe('SgLogoComponent', () => {
  let component: SgLogoComponent;
  let fixture: ComponentFixture<SgLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SgLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SgLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
