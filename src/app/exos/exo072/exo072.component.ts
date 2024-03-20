import { Component } from '@angular/core';

@Component({
  selector: 'app-exo072',
  templateUrl: './exo072.component.html',
  styleUrl: './exo072.component.scss',
})
export class Exo072Component {
  tempCelsiusToFahrenheit: number = 50; // 122 °F
  tempFahrenheitToCelsius: number = 50; // 10 °C
  temp: number = 32;

  unit: string = 'Celsius';
}
