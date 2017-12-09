import { Component } from '@angular/core';
import { Trip } from './models/trip';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  trips: Trip[];
  constructor() { }

  ngOnInit() {
    this.trips = [
      {
        name: 'Super flight to Venus',
        cost: 18200,
        duration: '2 Earth Years',
        description: 'Race through the Solar System to reach the Red planet. This flight will take 11 Earth Years for each side of the journey.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Planets2013.svg/2000px-Planets2013.svg.png'
      },
      {
        name: 'Escape to Moon',
        cost: 900,
        duration: '1 Earth Month',
        description: 'Perfect for a short holiday',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Planets2013.svg/2000px-Planets2013.svg.png'
      }
    ];
  }
}

