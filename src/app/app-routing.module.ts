import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/****Components****/
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TourComponent } from './tour/tour.component';
import { ContactComponent } from './contact/contact.component';
import { MapsComponent } from './maps/maps.component';


const ROUTES: Routes = [
//  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'tour', component: TourComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}