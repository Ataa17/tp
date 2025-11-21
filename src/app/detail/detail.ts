import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CvModel } from '../models/cv.model';
import { CommonModule } from '@angular/common'; // added to make *ngIf / NgIf available

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './detail.html',
  styleUrl: './detail.css',
})
export class Detail implements OnChanges {
  @Input() cv: CvModel | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['cv']) {
      console.log('[Detail] Received CV', this.cv);
    }
  }
}