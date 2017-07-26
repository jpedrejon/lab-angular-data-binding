import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  todaysFood: any[] = [];
  todaysFoodName: string[]= []
  foodies: Object[];
  newFood: Object = {};
  show: Boolean = true;
  showList: number = 0

  constructor() { }
  ngOnInit() {
    this.foodies = foods;
  }

  addItem(foodie){
    this.foodies.unshift(foodie);
    console.log(this.foodies)
    this.show = !this.show;
  }
  addItemForm() {
    this.show = !this.show;
  }

  addList(foods) {
    if(this.todaysFoodName.indexOf(foods.name) !== -1) {
      this.todaysFood[this.todaysFoodName.indexOf(foods.name)].quantity++;
    } else {
      foods.quantity++;
      this.todaysFoodName.push(foods.name)
      this.todaysFood.push(foods)
    }
    this.totalCalories(this.todaysFood);
  }
  totalCalories(todaysFood) {
    let total = 0
    for (let i = 0; i < todaysFood.length; i++) {
       let cal = todaysFood[i].calories*todaysFood[i].quantity
       total += cal
     }
    this.showList = total
    return total
  }


}
