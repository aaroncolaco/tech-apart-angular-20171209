import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'app';
  name: string;
  cost: number;
  description: string;
  duration: string;
  imageUrl: string;

  constructor() { }

  ngOnInit() {
    this.name = 'Super flight to Venus';
    this.cost = 18200;
    this.duration = '2 Earth Years';
    this.description = 'Race through the Solar System to reach the Red planet. This flight will take 11 Earth Years for each side of the journey.';
    this.imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Planets2013.svg/2000px-Planets2013.svg.png'
  }
}

