import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  updateForm !: FormGroup
  isShow: boolean = false
  @Output() updateData: EventEmitter<any> = new EventEmitter()
  @Input() todoForm: any
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.updateForm = this.fb.group({
      update: ['', Validators.required]
    })
    this.updateData.emit({
      data: this.updateForm.value.update,
      show: this.isShow
    })
  }
  taskControl() { }
  closeModal() {
    this.isShow = true
  }
  updateTask() {
    console.log(this.updateForm.value.update)
    this.todoForm.controls['todoValue'].setValue(this.updateForm.value.update)
  }
}
