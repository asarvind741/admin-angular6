import { NgModule } from '@angular/core';
import {ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        ReactiveFormsModule,
        MaterialModule,
        HttpClientModule
    ],
    exports:[
        ReactiveFormsModule,
        MaterialModule,
        HttpClientModule
    ]
})

export class SharedModule {}