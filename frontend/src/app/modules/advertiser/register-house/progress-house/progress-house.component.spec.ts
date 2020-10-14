import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressHouseComponent } from './progress-house.component';

describe('ProgressHouseComponent', () => {
  let component: ProgressHouseComponent;
  let fixture: ComponentFixture<ProgressHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
