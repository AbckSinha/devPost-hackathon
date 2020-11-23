import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { CommonDataComponent } from 'src/shared/components/common-data/common-data.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/shared/shared.module';
import { HomeDashboardComponent } from './components/home-dashboard/home-dashboard.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { SuccessPageComponent } from './components/successpage/successpage.component';

export const COMPONENTS = [
  LoginComponent,
  SuccessPageComponent,
  HomeDashboardComponent,
  CreateAccountComponent
];

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    SharedModule
  ],
  declarations: COMPONENTS,
  providers: [
    CommonDataComponent,
    DatePipe
  ],
  exports: COMPONENTS
})
export class AuthModule { }
