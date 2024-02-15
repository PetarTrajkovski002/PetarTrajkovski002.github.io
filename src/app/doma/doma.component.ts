import { Component, OnInit } from '@angular/core';
import { ProcesorService } from '../services/procesor/procesor.service';
import { CPU } from '../shared/models/procesor';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-doma',
  templateUrl: './doma.component.html',
  styleUrl: './doma.component.css'
})
export class DomaComponent implements OnInit {

  cpus:CPU[]=[];
  constructor(private cpuService:ProcesorService,private route:ActivatedRoute){}
  ngOnInit(): void {
  this.route.params.subscribe(params => {
    if(params["searchTerm"])
    {
      this.cpus=this.cpuService.getALL().filter(cpu=>cpu.name.toLowerCase().includes(params["searchTerm"].toLowerCase()));
    }
    else
    {
      this.cpus=this.cpuService.getALL();
    }
  })
  
}
}
