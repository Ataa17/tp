import { Component , Input, Output, EventEmitter } from '@angular/core';
import { CvModel } from '../models/cv.model';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.html',
  styleUrl: './item.css',
})
export class Item {
  @Input() cv!: CvModel;
  @Output() clickEmitter = new EventEmitter<CvModel>();

  selectItem(): void {
    console.log('[Item] Selected CV', this.cv);
    this.clickEmitter.emit(this.cv);
  }
}