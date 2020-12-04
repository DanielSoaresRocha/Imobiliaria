import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { House } from 'src/app/shared/models/house.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {
  @Output() stageEmit = new EventEmitter();
  @Output() finishEmit = new EventEmitter();
  @Input() house: House;

  finishForm: FormGroup;
  
  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createFinishForm();
  }

  finish(){
    this.stageEmit.emit({stage: 5});
    this.finishEmit.emit();
  
    this.house.nome = this.nome.value;
    
  }
  
  back(){
    this.stageEmit.emit({stage: 3});
  }

  createFinishForm(){
    this.finishForm = this.fb.group({
      nome: [
        '',
      ]
    })
  }

  get nome(){
    return this.finishForm.get('nome');
  }
}
