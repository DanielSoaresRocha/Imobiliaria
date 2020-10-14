import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAdvertiserComponent } from './navbar-advertiser.component';

describe('NavbarAdvertiserComponent', () => {
  let component: NavbarAdvertiserComponent;
  let fixture: ComponentFixture<NavbarAdvertiserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarAdvertiserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarAdvertiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
