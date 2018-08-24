import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ActivateComponent } from './activation/activation.component';


const routes: Routes = [
    { path: '', component: LoginComponent, pathMatch: 'full'},
    { path: 'signup', component: SignupComponent},
    { path: 'activate/:token', component: ActivateComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AuthRoutingModule{}