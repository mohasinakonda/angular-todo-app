import { CdkDragDrop, DropListRef, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { TaskPros } from '../models/interfaces';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  todoForm !: FormGroup
  task: TaskPros[] = []
  progress: TaskPros[] = []
  done: TaskPros[] = []
  isEnable: boolean = false
  updateId: any
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      item: ['', Validators.required]
    });
  }
  addTask() {
    this.task.push({
      id: Date.now(),
      description: this.todoForm.value.item,
      isDone: false
    })
    this.todoForm.reset()
  }
  deleteHandler(id: string | number) {
    this.task = this.task.filter(data => data.id !== id)
  }
  updateHandler(id: string | number, item: TaskPros) {
    this.isEnable = true
    this.todoForm.controls['item'].setValue(item.description)
    this.updateId = id
  }

  updateTask() {
    const description = this.task.find((data: TaskPros) => data?.id === this.updateId)
    if (description) {

      description.description = this.todoForm.value.item
    }

  }
  drop(event: CdkDragDrop<TaskPros[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
