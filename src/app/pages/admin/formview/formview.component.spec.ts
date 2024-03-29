import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormViewComponent } from './formview.component';

describe('FormViewComponent', () => {
  let component: FormViewComponent;
  let fixture: ComponentFixture<FormViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
