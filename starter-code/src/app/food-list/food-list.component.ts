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
  show: Boolean = true;
  constructor() { }

  ngOnInit() {
    this.foodies = foods;
  }

  addItem(){
    this.show = !this.show;
    foods.push(this.newFood);

  }
  addItemForm() {
    this.show = !this.show;
  }
}
