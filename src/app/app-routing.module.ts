import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletorComponent } from '@layout/skeletor/skeletor.component';

const routes: Routes = [{
  path: '', 
  redirectTo: '/panel/user',
  pathMatch:'full'
 },
 {
  path: 'panel',
  component: SkeletorComponent,
  children: [ 
  {
    path: 'user',
    loadChildren: () => import ('@modules/user/user.module').then(m => m.UserModule)
  },
  {
    path:'**',
    redirectTo:'/panel/user',
    pathMatch:'full'
  }]
},
{
  path:'**',
  redirectTo:'/panel/user',
  pathMatch:'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
