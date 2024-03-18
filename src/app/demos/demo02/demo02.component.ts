import { Component } from '@angular/core';

@Component({
  selector: 'app-demo02',
  templateUrl: './demo02.component.html',
  styleUrl: './demo02.component.scss',
})
//property binding
export class Demo02Component {
  mavariable1: string = '';
  mavariable2: number = 42;
  mavariable3: boolean = true;
}
