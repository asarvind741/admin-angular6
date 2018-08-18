import { NgModule } from '@angular/core';
import {ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common'
import { MaterialModule } from '../material.module';

@NgModule({
    imports: [
        ReactiveFormsModule,
        MaterialModule
    ],
    exports:[
        ReactiveFormsModule,
        MaterialModule
    ]
})

export class SharedModule {}