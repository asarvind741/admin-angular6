import { NgModule } from '@angular/core';
import { 
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatSidenavModule,
    MatCheckboxModule
} from '@angular/material';

@NgModule({
   imports: [
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatMenuModule
   ],
   exports: [
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatMenuModule
   ]
})

export class MaterialModule{}