import { Component } from '@angular/core';

@Component({
  selector: 'app-color-div',
  imports: [],
  templateUrl: './color-div.html',
  styleUrl: './color-div.css',
})
export class ColorDiv {
  color: string = 'red';
  


  applyColor() {
    this.color = 'red';
    
  }
}
