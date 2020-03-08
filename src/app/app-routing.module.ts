import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'choice',
    loadChildren: () => import('./pages/choice/choice.module').then( m => m.ChoicePageModule)
  },
  {
    path: 'solo-req',
    loadChildren: () => import('./pages/solo-req/solo-req.module').then( m => m.SoloReqPageModule)
  },
  {
    path: 'choice2',
    loadChildren: () => import('./pages/choice2/choice2.module').then( m => m.Choice2PageModule)
  },
  {
    path: 'reconcile',
    loadChildren: () => import('./pages/reconcile/reconcile.module').then( m => m.ReconcilePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
