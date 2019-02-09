import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../servise/todo.service'
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];


  constructor(private TodoService:TodoService ) { }

  ngOnInit() {
      this.TodoService.getTodos().subscribe(todos => {
      this.todos = todos
    })
  }

}
