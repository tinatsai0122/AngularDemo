import { Component } from '@angular/core';

@Component({
  selector: 'app-demo04',
  templateUrl: './demo04.component.html',
  styleUrl: './demo04.component.scss',
})
export class Demo04Component {
  srcImage: string =
    'https://logowik.com/content/uploads/images/simpson-bart81811.logowik.com.webp';
  altImage: string = 'photo de Bart Simpson';

  valueInput: string = 'Hello World!';

  // changeValue(event: InputEvent | any) {
  //   this.valueInput = (event.target as HTMLInputElement).value;
  // }

  changeValue(event: Event) {
    //const {value} =event.target as HTMLInputElement;
    const input = event.target as HTMLInputElement;
    this.valueInput = input.value;
  }

  minRange: number = 0;
  maxRange: number = 100;
  rangeValue: number = 50;
}
