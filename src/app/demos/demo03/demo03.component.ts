import { Component } from '@angular/core';

@Component({
  selector: 'app-demo03',
  templateUrl: './demo03.component.html',
  styleUrl: './demo03.component.scss',
})
export class Demo03Component {
  compteur: number = 0;
  increase() {
    this.compteur++;
  }
  decrease() {
    this.compteur--;
  }

  firstname: string = '';
  lastname: string = '';

  sendInfo(event: SubmitEvent) {
    console.log(event);
    console.log(this.firstname);
    console.log(this.lastname);
  }
}
