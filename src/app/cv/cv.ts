import { Component, OnInit } from '@angular/core';
import { CvModel } from '../models/cv.model';
import { List } from '../list/list';
import { Detail } from '../detail/detail';

@Component({
  selector: 'app-cv',
  standalone: true,
  templateUrl: './cv.html',
  styleUrls: ['./cv.css'],
  imports: [List, Detail],
})
export class Cv implements OnInit {
   cvs: CvModel[] = [];
  selectedCv: CvModel | null = null;

  ngOnInit(): void {
    // Initialize your CV list here
    this.cvs = [
      {
        id: 1,
        name: 'Doe',
        firstname: 'John',
        Age: 30,
        Cin: '12345678',
        Job: 'Software Engineer',
        path: 'ataa.png'
      },
      {
        id: 2,
        name: 'Smith',
        firstname: 'Jane',
        Age: 28,
        Cin: '87654321',
        Job: 'Product Manager',
        path: 'ataa.png'
      }
      // Add more CVs as needed
    ];
  }

  onCvSelected(cv: CvModel): void {
    console.log('[Cv] CV selected', cv);
    this.selectedCv = cv;
  }
}