import { Injectable } from '@angular/core';
import { Cart } from '../../shared/models/Cart';
import { CPU } from '../../shared/models/procesor';
import { CartItem } from '../../shared/models/CartItem';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart=new Cart();

  addToCart(cpu: CPU):void{
    let cartItem=this.cart.items.find(item=>item.cpu.id===cpu.id)
    if(cartItem)
    {
      this.changeQuantity(cpu.id,cartItem.quantity+1);
      return;
    }
    this.cart.items.push(new CartItem(cpu));
  }
  removeFromCart(cpuId:number):void{
    this.cart.items=this.cart.items.filter(item=>item.cpu.id!=cpuId);
  }
  changeQuantity(cpuId:number,quantity:number){
    let cartItem=this.cart.items.find(item=>item.cpu.id===cpuId)
    if(!cartItem)
    {
        return;
    }
   cartItem.quantity=quantity;

    
  }
  getCart():Cart{
    return this.cart;
  }

}
