import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodies: Object[];
  newFood: Object = {};
  show: boolean = false;
  constructor() { }

  ngOnInit() {
    this.foodies = foods;
  }

  addItem(){
    foods.push(this.newFood);
    this.show = !this.show;
  }
}
