import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {
  @Output() stageEmit = new EventEmitter();
  @Output() finishEmit = new EventEmitter();
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  finish(){
    this.stageEmit.emit({stage: 5});
    this.finishEmit.emit();
  }
  
  back(){
    this.stageEmit.emit({stage: 3});
  }

}
