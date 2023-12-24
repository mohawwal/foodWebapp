// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { FoodService } from 'src/app/services/food.service';
// import { Food } from 'src/app/Shared/models/food';
// import { CartService } from 'src/app/services/cart.service';

// @Component({
//   selector: 'app-food-page',
//   templateUrl: './food-page.component.html',
//   styleUrls: ['./food-page.component.css']
// })
// export class FoodPageComponent implements OnInit {
//   food!: Food;
//   constructor(activatedRoute: ActivatedRoute, foodService: FoodService, private cartService: CartService, private router: Router) {
//     activatedRoute.params.subscribe((params)=> {
//       if(params.id)
//         this.food = foodService.getFoodById(params.id)
//     })
//   }

//   ngOnInit(): void {
//   }

//   addToCart() {
//     this.cartService.addToCart(this.food);
//     this.router.navigateByUrl('/cart-page')
//   }
// }


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/app/Shared/models/food';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
 food!: Food
  constructor(activatedRoute: ActivatedRoute, foodServices: FoodService, private cartService: CartService, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if(params)
        this.food= foodServices.getFoodById(params.id)
    })
  }

  ngOnInit(): void {
  }

  addToCart() {
    this.cartService.addToCart(this.food)
    this.router.navigateByUrl('/cart-page')
  }

}
