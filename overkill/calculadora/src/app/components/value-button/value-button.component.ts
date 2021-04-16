import { Component, Input, OnInit } from '@angular/core';
import { MathService } from 'src/app/services/math.service';

@Component({
  selector: 'app-value-button',
  templateUrl: './value-button.component.html',
  styleUrls: ['./value-button.component.scss']
})
export class ValueButtonComponent implements OnInit {

  @Input() value: number | string = NaN;

  constructor(
    private mathService: MathService
  ) { }

  ngOnInit(): void {
  }

  addValue(value: number | string){
    this.mathService.addToEquation(value)
  }

}
