import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterHouseComponent } from './register-house.component';

describe('RegisterHouseComponent', () => {
  let component: RegisterHouseComponent;
  let fixture: ComponentFixture<RegisterHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
