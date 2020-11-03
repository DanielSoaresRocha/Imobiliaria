import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {
  @Output() stageEmit = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  finish(){
    this.stageEmit.emit({stage: 5}); 
  }
  
  back(){
    this.stageEmit.emit({stage: 3});
  }

}
