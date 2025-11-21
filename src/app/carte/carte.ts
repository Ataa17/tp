import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-carte',
  imports: [FormsModule],
  templateUrl: './carte.html',
  styleUrl: './carte.css',
})
export class Carte {
  nom: string = 'Mars';
  prenom: string = 'Ataa';
  job: string = 'Student';
  image: string = 'ataa.png';
  citation: string = "with great power comes great responsibility";
  description: string = 'ICT student at INSAT';
  motsCles: string = 'Nextjs , react, datascience, AI, ML, python';

}
