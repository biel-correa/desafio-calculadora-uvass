import { Component, OnInit } from '@angular/core';
import { MathService } from 'src/app/services/math.service';

@Component({
  selector: 'app-calc-button',
  templateUrl: './calc-button.component.html',
  styleUrls: ['./calc-button.component.scss']
})
export class CalcButtonComponent implements OnInit {

  constructor(
    private mathService: MathService
  ) { }

  ngOnInit(): void {
  }

  calc(){
    this.mathService.calcEquation()
  }

}
