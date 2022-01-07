import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './views/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { JogosComponent } from './views/jogos/jogos.component';
import { LoginComponent } from './views/login/login.component';
import { PcgamerComponent } from './views/pcgamer/pcgamer.component';
import { PerifericosComponent } from './views/perifericos/perifericos.component';

const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'jogos', component: JogosComponent},
{path: 'pcgamer', component: PcgamerComponent},
{path: 'perifericos', component: PerifericosComponent},
{path: 'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
