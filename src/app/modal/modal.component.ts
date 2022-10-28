import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.updateForm = this.fb.group({
      update: ['', Validators.required]
    })
    this.updateData.emit('hello')
  }
  taskControl() { }
  closeModal() {
    this.isShow = true
  }

}
