import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './views/footer/footer.component';
import { HeaderComponent } from './views/header/header.component';
import { JogosComponent } from './views/jogos/jogos.component';
import { PcgamerComponent } from './views/pcgamer/pcgamer.component';
import { PerifericosComponent } from './views/perifericos/perifericos.component';
import { LoginComponent } from './views/login/login.component';
import { BannerComponent } from './views/banner/banner.component';
import { ShoppingCartComponent } from './views/shopping-cart/shopping-cart.component';
import { ProductListComponent } from './views/shopping-cart/product-list/product-list.component';
import { FiltersComponent } from './views/shopping-cart/filters/filters.component';
import { CartComponent } from './views/shopping-cart/cart/cart.component';
import { CartItemComponent } from './views/shopping-cart/cart-item/cart-item.component';
import { ProductItemComponent } from './views/shopping-cart/product-list/product-item/product-item.component';
import { BannerDescontosComponent } from './views/banner-descontos/banner-descontos.component';
import { SobreComponent } from './views/sobre/sobre.component';
import { InstitucionalComponent } from './views/institucional/institucional.component';
import { NewsletterComponent } from './views/newsletter/newsletter.component';
import { DestaquesComponent } from './views/jogos/destaques/destaques.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    JogosComponent,
    PcgamerComponent,
    PerifericosComponent,
    LoginComponent,
    BannerComponent,
    ShoppingCartComponent,
    ProductListComponent,
    FiltersComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent,
    BannerDescontosComponent,
    SobreComponent,
    InstitucionalComponent,
    NewsletterComponent,
    DestaquesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule, 
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
