import { NgModule } from '@angular/core';
import { 
    MatButtonModule,
    MatMenuModule,
    MatCardModule
} from '@angular/material';

@NgModule({
   imports: [
    MatButtonModule,
    MatMenuModule,
    MatCardModule
   ],
   exports: [
    MatButtonModule,
    MatMenuModule,
    MatCardModule
   ]
})

export class MaterialModule{}