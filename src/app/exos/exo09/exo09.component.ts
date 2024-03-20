import { Component } from '@angular/core';
import { Article } from './article';

@Component({
  selector: 'app-exo09',
  templateUrl: './exo09.component.html',
  styleUrl: './exo09.component.scss',
})
export class Exo09Component {
  articles: Article[] = [];

  name: string = '';
  quantity: number = 0;
  dateAdd: Date = new Date();

  addArticle() {
    this.articles.push({
      name: 'Iphone 15',
      quantity: 1,
      dateAdd: new Date('03-02-2024'),
    });
  }
  removeArticle(index: number) {
    this.articles.splice(index, 1);
  }
  addOne(index: number) {
    this.articles[index].quantity++;
  }
  removeOne(index: number) {
    this.articles[index].quantity--;
  }
}
