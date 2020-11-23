import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeDashboardComponent } from './components/home-dashboard/home-dashboard.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { SuccessPageComponent } from './components/successpage/successpage.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, data: { title: 'Login' },},
  { path: 'home', component: HomeDashboardComponent, data: { title: 'Home' } },
  { path: 'success-page', component: SuccessPageComponent, data: { title: 'Success' } },
  { path: 'create-account', component: CreateAccountComponent, data: { title: 'Register' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
