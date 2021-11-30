import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ReservedComponent} from "./reserved.component";
import {MatNativeDateModule} from "@angular/material/core";
import {ReservedService} from "./reserved.service";

const routes: Routes = [
  {
    path: '',
    component: ReservedComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatNativeDateModule,
  ],
  providers: [ReservedService]
})
export class ReservedModule {
}
