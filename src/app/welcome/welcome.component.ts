import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  isHidden: boolean = false
  constructor(private dataServe: DataServiceService) { }

  ngOnInit(): void {

  }
  close() {
    this.isHidden = true
  }
}
