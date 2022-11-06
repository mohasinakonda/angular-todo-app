import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})

export class ShopComponent implements OnInit {
  text: string = ''
  constructor() { }
  products = [
    {
      name: 'abul khayer steel',
      price: 234,
      description: 'nothing is better then something',
      color: 'skyblue',
      available: 'Available'
    },
    {
      name: 'bongobondo satellite',
      price: 234,
      description: 'nothing is better then something',
      color: 'pink',
      available: 'Available'
    },
    {
      name: 'abul khayer steel',
      price: 234,
      description: 'nothing is better then something',
      color: 'skyblue',
      available: 'Not Available'
    },
    {
      name: 'podma setu',
      price: 234,
      description: 'nothing is better then something',
      color: 'white',
      available: 'Available'
    },
    {
      name: 'jomona seto',
      price: 234,
      description: 'nothing is better then something',
      color: 'skyblue',
      available: 'Not Available'
    },
  ]
  ngOnInit(): void {

  }

  filterProducts(searchText: string) {
    this.text = searchText
  }
}
