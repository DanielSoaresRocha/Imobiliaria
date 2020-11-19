import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-photos',
  templateUrl: './slider-photos.component.html',
  styleUrls: ['./slider-photos.component.css']
})
export class SliderPhotosComponent implements OnInit {
  photos = [
    {
      url: '../../../../assets/casa.png'
    },
    {
      url: '../../../../assets/casa.png'
    },
    {
      url: '../../../../assets/casa.png'
    },
    {
      url: '../../../../assets/casa.png'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
