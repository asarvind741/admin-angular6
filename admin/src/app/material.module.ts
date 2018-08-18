import { NgModule } from '@angular/core';
import { 
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule
} from '@angular/material';

@NgModule({
   imports: [
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule
   ],
   exports: [
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule
   ]
})

export class MaterialModule{}