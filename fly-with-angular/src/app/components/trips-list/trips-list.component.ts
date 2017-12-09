import { Component, OnInit } from '@angular/core';
import { Trip } from '../../models/trip';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips-list.component.html',
  styleUrls: ['./trips-list.component.scss']
})
export class TripsListComponent implements OnInit {

  title = 'Flights of a Lifetime';
  addTripFormMode = false;
  tripForm: FormGroup;
  amountForm: FormGroup;
  totalMoney: number;

  trips: Array<Trip> = [
    {
      name: 'Super Flights to Mars',
      price: 18200,
      duration: '2 Earth Years',
      description: 'Race through the Solar System to reach the Red planet. This flight will take 11 Earth Years for each side of the journey.',
      image_url: 'https://angular.io/assets/images/logos/angular/angular.png',
      booked: false
    },
    {
      name: 'Super Flights to Mars',
      price: 18200,
      duration: '2 Earth Years',
      description: 'Race through the Solar System to reach the Red planet. This flight will take 11 Earth Years for each side of the journey.',
      image_url: 'https://angular.io/assets/images/logos/angular/angular.png',
      booked: false
    },
    {
      name: 'Super Flights to Mars',
      price: 18200,
      duration: '2 Earth Years',
      description: 'Race through the Solar System to reach the Red planet. This flight will take 11 Earth Years for each side of the journey.',
      image_url: 'https://angular.io/assets/images/logos/angular/angular.png',
      booked: false
    }
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForms();
    this.totalMoney = 0;
  }

  createForms() {
    this.tripForm = this.fb.group({
      name: new FormControl('', Validators.required),
      price: new FormControl(0, Validators.required),
      duration: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      imageUrl: new FormControl('', Validators.required)
    });

    this.amountForm = this.fb.group({
      totalMoney: new FormControl()
    });
  }

  toggleDisplayMode() {
    this.addTripFormMode = !this.addTripFormMode;
  }

  formSubmitted() {
    const newTrip: Trip = {
      name: this.tripForm.controls.name.value,
      price: this.tripForm.controls.price.value,
      duration: this.tripForm.controls.duration.value,
      description: this.tripForm.controls.description.value,
      image_url: this.tripForm.controls.imageUrl.value,
      booked: false
    };

    this.trips.push(newTrip);
    this.toggleDisplayMode();
  }

  updateTotalMoney() {
    this.totalMoney = this.amountForm.controls.totalMoney.value;
  }

  bookTrip(index: number) {
    const trip = this.trips[index];

    const confirmBooking = () => {
      this.totalMoney -= trip.price;
      trip.booked = true;
    };
    const insufficientMoneyAlert = () => alert('Insufficient amount of money.');

    (this.totalMoney - trip.price) < 0 ? insufficientMoneyAlert() : confirmBooking();


  }


}
