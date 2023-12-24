// import { Component, OnInit } from '@angular/core';
// import { Cart } from 'src/app/Shared/models/cart';
// import { CartItem } from 'src/app/Shared/models/cartItem';
// import { CartService } from 'src/app/services/cart.service';

// @Component({
//   selector: 'app-cart-page',
//   templateUrl: './cart-page.component.html',
//   styleUrls: ['./cart-page.component.css']
// })
// export class CartPageComponent implements OnInit {
//   cart!: Cart;
  
//   constructor(private cartService: CartService){
//     this.cartService.getCartObservable().subscribe((cart) => {
//       this.cart = cart
//     })
//   }

//   ngOnInit(): void {}

//   removeFromCart(cartItem:CartItem) {
//     this.cartService.removeFromCart(cartItem.food.id)
//   }

//   changeQuantity(cartItem: CartItem, quantityInString: string) {
//     const quantity = parseInt(quantityInString)
//     this.cartService.changeQuantity(cartItem.food.id, quantity)
//   }
// }


import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/Shared/models/cart';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/Shared/models/cartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  cart!: Cart
  constructor(private cartServices: CartService){
    this.cartServices.getCartObservable().subscribe((cart) =>
      this.cart = cart
    )
  }

  ngOnInit(): void {}

  removeFromCart(cartItem:CartItem) {
    this.cartServices.removeFromCart(cartItem.food.id)
  }

  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString)
    this.cartServices.changeQuantity(cartItem.food.id, quantity)
  }

}
