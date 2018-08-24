import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { ActivateComponent } from './activation/activation.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ActivateComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    AuthRoutingModule

  
  ],
  providers: [
    UserService,
    AuthService
  ],
})
export class AuthModule { }
