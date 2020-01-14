import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../app.component';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  interpolation: ['{{', '}}']
})
export class CardComponent implements OnInit {
  @Input() card: Card
  @Input() index: number

  title = 'My Card Title';
  text = 'My Sample Text';

  cardDate: Date = new Date();



  disabled = false;
  array = [1, 1, 2, 4, 8, 12, 20];

  obj = {name: 'Vlad', info: {age: 25, job: 'Frontend'}};

  imgUrl = 'https://im0-tub-ru.yandex.net/i?id=cb241e3cc667e252e1835ab5925d8fde&n=13';
  textColor: string;

  getInfo(): string {
    return 'This is my info!';
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.imgUrl = 'https://images.squarespace-cdn.com/content/v1/5c82c3b9840b166c2d17d3c9' +
        '/1557978120510-2H71KJUK3UFGH569FI1R/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-' +
        'zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwkCFOLgzJj4yIx-vIIEbyWWRd0QUGL6lY' +
        '_wBICnBy59Ye9GKQq6_hlXZJyaybXpCc/ICG+Logo-Small.png';
      this.disabled = true;
    }, 3000);
  }

  changeTitle() {
    this.card.title = 'Title has been changed';
    setTimeout(() => {
      this.card.title = 'Pidor';
    }, 4000);
  }

  inputHandler(value) {
    // const value = event.target.value;
    this.card.title = value;

  }

  changeHandler() {
    console.log(this.card.title);
  }
}
