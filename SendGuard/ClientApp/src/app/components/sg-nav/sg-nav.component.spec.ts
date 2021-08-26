import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SgNavComponent } from './sg-nav.component';

describe('SgNavComponent', () => {
  let component: SgNavComponent;
  let fixture: ComponentFixture<SgNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SgNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SgNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
