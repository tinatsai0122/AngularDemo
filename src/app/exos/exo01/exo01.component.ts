import { Component } from '@angular/core';

@Component({
  selector: 'app-exo01',
  templateUrl: './exo01.component.html',
  styleUrl: './exo01.component.scss',
})
export class Exo01Component {
  fullName: string = 'Lily Chang';
  email: string = 'lily@gmail.com';
  birthday: Date = new Date('1998-12-25');
  gender: string = 'Female';
  languages: string[] = ['English', 'French', 'Spanish', 'Chinese'];
  profileImage?: string =
    'https://logowik.com/content/uploads/images/simpson-bart81811.logowik.com.webp';
}
