import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'You can do it 👨‍💻' ;

  constructor(){
    this.title = "Hello World"
  }
}
