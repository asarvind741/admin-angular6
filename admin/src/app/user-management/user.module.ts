import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { UserService } from '../services/user.service';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './users-routing.module';
import { UserEditFormComponent } from './user-edit-form/user-edit-form.component';
import { ConfirmDeleteComponent } from 'src/app/user-management/confirm-delete-dialog/confirm-delete-dialog';
import { ExcelService } from '../services/excel.service';

@NgModule({
  declarations: [
    UserComponent,
    UserEditFormComponent,
    ConfirmDeleteComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule

  
  ],
  entryComponents: [
    ConfirmDeleteComponent,
    UserEditFormComponent
  ],
  providers: [
    UserService,
    ExcelService
  ],
})
export class UsersModule { }
