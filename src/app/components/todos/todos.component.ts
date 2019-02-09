import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];


  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        "userId": 1,
        "id": 1,
        "title": "Hello to first ",
        "completed": false
      },
      {
        "userId": 2,
        "id": 12,
        "title": " Lets see second",
        "completed": true
      },
      {
        "userId": 3,
        "id": 13,
        "title": "and this is the last one ",
        "completed": false
      }
    ]
  }

}
