import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

    { path: '', loadChildren: './auth/auth.module#AuthModule' },
    { path: 'manage-users', loadChildren: './user-management/user.module#UsersModule'}

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }