import { CPU } from "./procesor";

export class CartItem{
    constructor(cpu:CPU)
    {
        this.cpu=cpu;
        
    }
    cpu:CPU;
    quantity:number=1;
    get price():number{
        return this.cpu.price*this.quantity;
    }
}