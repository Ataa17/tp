import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ColorDiv } from './color-div/color-div';
import { Carte } from './carte/carte';
import { FormsModule } from '@angular/forms';
import { Ttc } from './ttc/ttc';
import { Cv } from './cv/cv';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ColorDiv,Carte, FormsModule,Ttc,Cv],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tp2');
}
