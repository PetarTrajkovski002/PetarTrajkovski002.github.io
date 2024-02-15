import { Component,OnInit } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { CartService } from '../services/cart/cart.service';
import { CartItem } from '../shared/models/CartItem';
import { ProcesorService } from '../services/procesor/procesor.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit{
  cart!:Cart;
  constructor(private cartService:CartService, private cpuService:ProcesorService)  {
    let cpus=cpuService.getALL();
    
    this.setCart();
  }
  
  ngOnInit(): void {
      
  }
  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.cpu.id);
    this.setCart();
    
  }
  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity=parseInt(quantityInString)
    this.cartService.changeQuantity(cartItem.cpu.id, quantity)
    this.setCart();
  }
  setCart(){
    this.cart=this.cartService.getCart();
  }
}
