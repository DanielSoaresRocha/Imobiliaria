import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  @Output() stageEmit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  goToFinish(){
    this.stageEmit.emit({stage: 4});
  }
  
  back(){
    this.stageEmit.emit({stage: 2});
  }

}
