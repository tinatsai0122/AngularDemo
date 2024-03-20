import { Component } from '@angular/core';

@Component({
  selector: 'app-exo03',
  templateUrl: './exo03.component.html',
  styleUrl: './exo03.component.scss',
})
export class Exo03Component {
  inputType: string = 'password';
  togglePassword() {
    this.inputType = this.inputType === 'password' ? 'text' : 'password';
  }
}
