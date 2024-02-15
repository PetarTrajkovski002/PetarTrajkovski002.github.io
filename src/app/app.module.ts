import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DomaComponent } from './doma/doma.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CpuPageComponent } from './cpu-page/cpu-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DomaComponent,
    SearchComponent,
    CartPageComponent,
    CpuPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
