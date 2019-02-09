import { Component, OnInit, Input } from '@angular/core';
import {TodoService} from '../../servise/todo.service'
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo
  constructor(private todoServise:TodoService) { }

  ngOnInit() {
  }
      setClasses(){
        let classes = {
          todo: true,
          'is-completed': this.todo.completed
        }
        return classes
      }

      onToggle(todo){
       todo.completed = !todo.completed

       this.todoServise.toggleCompleated(todo).subscribe(todo => {
         console.log(todo);
       })
      }
      onDelete(todo){
        console.log("Delete")
      }

      

}
