import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from "@angular/router";
import { House } from 'src/app/shared/models/house.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @Output() stageEmit = new EventEmitter();
  @Input() house: House;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToPrice() {
    this.stageEmit.emit({"stage": 2});
  }

  cancel(){
    this.router.navigate(['/']);
    this.stageEmit.emit({"stage": 0});
  }

}
