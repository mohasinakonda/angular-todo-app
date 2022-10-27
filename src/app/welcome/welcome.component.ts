import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name = 'amar sonar banla'
  title = 'doribar bangladesh'
  items: string[] = ['patistan', 'bangladesh', 'uttor koria', 'netherland', 'dokkin africa']
  constructor(private dataServe: DataServiceService) { }

  ngOnInit(): void {
    this.welcome()
    this.sendData()
  }
  welcome() {
    return this.title
  }
  data() {
    return this.dataServe.display()
  }
  sendData() {
    this.dataServe.getValue(this.title)
  }
}
