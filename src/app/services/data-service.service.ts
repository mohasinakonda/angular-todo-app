import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  dataArr: string[] = ['mohasin', 'mahin', 'johir raihan', 'humayun ahmed']
  constructor() { }
  display() {
    return this.dataArr.map(data => data)
  }
  getValue(value: string) {
    console.log(value)
  }
  showModal(event: Event) {
    console.log(event)
  }
}
