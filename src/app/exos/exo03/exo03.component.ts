import { Component } from '@angular/core';

@Component({
  selector: 'app-exo03',
  templateUrl: './exo03.component.html',
  styleUrl: './exo03.component.scss',
})
export class Exo03Component {
  email: string = '';
  password: string = '';

  togglePasswordVisibility() {
    const input = document.getElementById('password') as HTMLInputElement;
    input.type = input.type === 'password' ? 'text' : 'password';
  }
}
