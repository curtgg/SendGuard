import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SgHomePageComponent } from './sg-home-page.component';

describe('SgHomePageComponent', () => {
  let component: SgHomePageComponent;
  let fixture: ComponentFixture<SgHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SgHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SgHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
