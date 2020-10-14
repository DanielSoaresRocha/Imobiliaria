import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-house',
  templateUrl: './progress-house.component.html',
  styleUrls: ['./progress-house.component.css']
})
export class ProgressHouseComponent implements OnInit {
  @Input() stage: number;

  constructor() { }

  ngOnInit(): void {
  }

}
