import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  // { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then( m => m.AuthModule)},
  {path: '', loadChildren: () => import('./main/main.module').then(m => m.MainModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
