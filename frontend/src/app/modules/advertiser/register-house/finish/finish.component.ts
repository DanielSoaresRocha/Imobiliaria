import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { House } from 'src/app/shared/models/house.model';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {
  @Output() stageEmit = new EventEmitter();
  @Output() finishEmit = new EventEmitter();
  @Input() house: House;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  finish(){
    this.finishEmit.emit();
  }
  
  back(){
    this.stageEmit.emit({stage: 3});
  }

}
