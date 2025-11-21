import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvModel } from '../models/cv.model';
import { Item } from '../item/item';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, Item],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List  {
@Input() cvs: CvModel[] = [];
  @Output() selectedCvEmitter = new EventEmitter<CvModel>();

  onItemClicked(cv: CvModel): void {
    console.log('[List] Emitting selected CV', cv);
    this.selectedCvEmitter.emit(cv);
  }

}
