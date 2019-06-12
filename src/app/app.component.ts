import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lorem =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  date = new Date();


  posts = [
    {
      title: 'Mon premier post',
      content: this.lorem,
      loveIts: 0,
      created_at: this.date
    },
    {
      title: 'Mon deuxieme post',
      content: this.lorem,
      loveIts: 0,
      created_at: this.date
    },
    {
      title: 'Encore un post',
      content: this.lorem,
      loveIts: 0,
      created_at: this.date
    }
  ];
}
