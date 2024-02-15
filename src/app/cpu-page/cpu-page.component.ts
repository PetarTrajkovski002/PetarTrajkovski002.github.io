import { Component, OnInit } from '@angular/core';
import { CPU } from '../shared/models/procesor';
import { ActivatedRoute, Router } from '@angular/router';
import { ProcesorService } from '../services/procesor/procesor.service';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-cpu-page',
  templateUrl: './cpu-page.component.html',
  styleUrl: './cpu-page.component.css'
})
export class CpuPageComponent implements OnInit{
cpu!:CPU;
constructor(private activatedRoute:ActivatedRoute,private cpuService:ProcesorService,private cartService:CartService,private router:Router){
  activatedRoute.params.subscribe((params)=>{
    if(params['id'])
    {
      this.cpu=cpuService.getCPUbyId(params['id']);
    }
  })
}
ngOnInit(): void {
  
}
addToCart(){
  this.cartService.addToCart(this.cpu)
  this.router.navigateByUrl('/cart-page')
}
}
