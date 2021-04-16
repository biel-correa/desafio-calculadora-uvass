import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {
  display: string = "";
  equation: string = "";

  constructor() { }

  addToEquation(value: number | string){
    this.display += value
    switch (value) {
      case 'x':
        this.equation += '*'
        break;

      default:
        this.equation += value
        break;
    }
  }

  calcEquation(){
    this.display = eval(this.equation)
    this.equation = eval(this.equation)
  }
}
