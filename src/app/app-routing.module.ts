import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {BuyTicketComponent} from './components/buy-ticket/buy-ticket.component';


const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent,
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'buy-ticket',
    component: BuyTicketComponent,
    runGuardsAndResolvers: 'always'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
