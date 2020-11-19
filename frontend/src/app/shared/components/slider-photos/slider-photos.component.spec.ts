import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderPhotosComponent } from './slider-photos.component';

describe('SliderPhotosComponent', () => {
  let component: SliderPhotosComponent;
  let fixture: ComponentFixture<SliderPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
