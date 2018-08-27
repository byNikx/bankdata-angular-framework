import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';

import { TabsModule } from './modules/tabs/tabs.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { MapsComponent } from './maps/maps.component';
import { ContactComponent } from './contact/contact.component';
import { TourComponent } from './tour/tour.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapsComponent,
    ContactComponent,
    TourComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    TabsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
