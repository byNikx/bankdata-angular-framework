import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabLabelDirective } from './tab-label.directive';
import { TabNavDirective } from './tab-nav.directive';
import { TabLinkDirective } from './tab-link.directive';
import { TabGroupDirective } from './tab-group.directive';
import { TabChangeEventDirective } from './tab-change-event.directive';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  declarations: [
    TabLabelDirective, 
    TabNavDirective, 
    TabLinkDirective, 
    TabGroupDirective, 
    TabChangeEventDirective
  ],
  exports: [
    TabLabelDirective, 
    TabNavDirective, 
    TabLinkDirective, 
    TabGroupDirective, 
    TabChangeEventDirective
  ]
})
export class TabsModule { }
