import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DomaComponent } from './doma/doma.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CpuPageComponent } from './cpu-page/cpu-page.component';

const routes: Routes = [
  {path:'',component:DomaComponent},
  {path:'search/:searchTerm', component:DomaComponent},
  {path:'cpu/:id',component:CpuPageComponent},
  {path:'cart-page',component:CartPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
