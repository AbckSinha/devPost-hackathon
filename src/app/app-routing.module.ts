import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: './auth/auth.module#AuthModule',
    data: { allowUnAuthAccess: true }
  },
  {
    path: 'video-tutorials',
    loadChildren: './video-tutorials/video-tutorials.module#VideoTutorialsModule'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
