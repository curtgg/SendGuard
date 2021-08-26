import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SgHeaderComponent } from './sg-header.component';

describe('SgHeaderComponent', () => {
  let component: SgHeaderComponent;
  let fixture: ComponentFixture<SgHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SgHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SgHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
