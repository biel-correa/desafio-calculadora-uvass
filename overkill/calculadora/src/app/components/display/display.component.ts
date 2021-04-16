import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MathService } from 'src/app/services/math.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  constructor(
    private mathService: MathService
  ) { }

  ngOnInit(): void {
  }

  getEquation(){
    return this.mathService.display
  }
}
