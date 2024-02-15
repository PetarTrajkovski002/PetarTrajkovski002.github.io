import { Injectable } from '@angular/core';
import { CPU } from '../../shared/models/procesor';
@Injectable({
  providedIn: 'root'
})
export class ProcesorService {

  constructor() { }
  getCPUbyId(id: number):CPU{
    return this.getALL().find(cpu=>cpu.id==id)!;
  }
  getALL():CPU[]{
    return [
      {
        id:1,
        name:"Intel Core i5-14600K",
        price:350,
        tags:"tag1",
        favourite:true,
        stars:3,
        imageUrl:"/assets/images/slika1.jpg",
        cpuspeed:"E:2.6 GHz, P:3.5 GHz"
      },
      {
        id:2,
        name:"Intel Core i7-14700K",
        price:300,
        tags:"tag2",
        favourite:false,
        stars:4,
        imageUrl:"/assets/images/slika2.jpg",
        cpuspeed:"E:2.5 GHz, P:3.4 GHz"
      },
      {
        id:3,
        name:"Intel Core i9-14900K",
        price:400,
        tags:"tag3",
        favourite:true,
        stars:4.5,
        imageUrl:"/assets/images/slika3.jpg",
        cpuspeed:"E:2.4 GHz, P:3.2 GHz"
      },
      {
        id:4,
        name:"AMD Ryzen 7 7700X",
        price:200,
        tags:"tag4",
        favourite:true,
        stars:5,
        imageUrl:"/assets/images/slika4.jpg",
        cpuspeed:"4.5GHz"
      },
      {
        id:5,
        name:"AMD Ryzen 5 7600X",
        price:250,
        tags:"tag5",
        favourite:true,
        stars:4,
        imageUrl:"/assets/images/slika5.jpg",
        cpuspeed:"4.7GHz"
      },
      {
        id:6,
        name:"AMD Ryzen 9 7900X",
        price:200,
        tags:"tag6",
        favourite:false,
        stars:4,
        imageUrl:"/assets/images/slika6.jpg",
        cpuspeed:"4.7GHz"
      },
      {
        id:7,
        name:"AMD Ryzen 9 7950X3D",
        price:180,
        tags:"tag6",
        favourite:false,
        stars:4,
        imageUrl:"/assets/images/slika7.jpg",
        cpuspeed:"4.4GHz"
      },
  ]
  }
}
