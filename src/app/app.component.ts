import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
 <app-header></app-header>
 <app-banner></app-banner>
 <router-outlet></router-outlet>


<app-newsletter></app-newsletter>
<app-institucional></app-institucional>
<app-footer></app-footer>
 `,



  //se der errado voltar a pártir daqui::: templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GameMania';
}
