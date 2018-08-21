import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UserService } from '../services/user.service';
import { LawyerComponent } from './lawyer.component'
import { LawyerRoutingModule } from './lawyer-routing.module';
import { ConfirmDeleteComponent } from './confirm-delete-dialog/confirm-delete-dialog';
import { ExcelService } from '../services/excel.service';
import { LawyerEditFormComponent } from './lawyer-edit-form/lawyer-edit-form.component';

@NgModule({
  declarations: [
    LawyerComponent,
    LawyerEditFormComponent,
    ConfirmDeleteComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LawyerRoutingModule

  
  ],
  entryComponents: [
    ConfirmDeleteComponent,
    LawyerEditFormComponent
  ],
  providers: [
    UserService,
    ExcelService
  ],
})
export class LawyerModule { }
