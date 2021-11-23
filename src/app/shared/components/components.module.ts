import {HeaderComponent} from './header/header.component';

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CounterControlComponent} from "./counter-control/counter-control.component";


@NgModule({
  declarations: [
    HeaderComponent,
    CounterControlComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    CounterControlComponent
  ]
})
export class ComponentsModule {
}
