import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHouseComponent } from './card-house.component';

describe('CardHouseComponent', () => {
  let component: CardHouseComponent;
  let fixture: ComponentFixture<CardHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
