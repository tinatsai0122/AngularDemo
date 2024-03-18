import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo01',
  templateUrl: './demo01.component.html',
  styleUrl: './demo01.component.scss',
})
export class Demo01Component implements OnInit {
  //primitives types
  variable1: string = 'Hello, World!';
  variable2: number = 42;
  variable3: boolean = true;

  //array
  variable4: string[] = ['Hello', 'World'];
  variable5: number[] = [1, 2, 3];
  variable6: boolean[] = [true, false];

  variable7!: string; //definite assigment assertion
  declare variable8: number; //Ambient declaration
  //utiliser pour initialisation des variables
  //l'inscription de la variable 7 est obligatoire.
  ngOnInit(): void {
    this.variable7 = 'Hello';
    this.variable8 = 42;
  }
  //Any
  variable9: any[] = [42, 'Hello', () => {}];

  //Methods
  variable10 = function () {};
  variable11 = () => {};

  variable12: (a: number, b: number) => number = (a, b) => a + b;
  variable13: (a: number, b: number) => number = (a, b) => {
    return a + b;
  };

  variable14?: string; //optional
}
