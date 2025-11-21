import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ttc',
  imports: [FormsModule],
  templateUrl: './ttc.html',
  styleUrl: './ttc.css',
})
export class Ttc {
  tauxTVA: number = 18;
  prixHT : number = 0;
  quantity: number=1 ;
discount: number=0 ;

  calculateUnitaireTTC(): number {
    return this.prixHT + (this.prixHT * this.tauxTVA) / 100;
  }

  calculateTotalTTC(): number {
    if (this.quantity <= 10) {
    return this.calculateUnitaireTTC() * this.quantity;
  }if (this.quantity > 10 && this.quantity < 15) {
    this.discount =this.calculateUnitaireTTC() * this.quantity * 0.2;  
    return this.calculateUnitaireTTC() * this.quantity * 0.8;
  } else {
    this.discount =this.calculateUnitaireTTC() * this.quantity * 0.3;  
    return this.calculateUnitaireTTC() * this.quantity * 0.7;
  }
  }
}
