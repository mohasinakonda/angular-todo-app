import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  @Input() products: any = []
  @Output() filterProduct: EventEmitter<any> = new EventEmitter()

  formData !: FormGroup
  searchString: string = ''
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formData = this.fb.group({
      value: ['']
    })


  }
  changeHandler() {
    this.filterProduct.emit(this.searchString)
    console.log(this.searchString)
  }



}
