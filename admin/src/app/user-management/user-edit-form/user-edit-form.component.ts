import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
    selector: 'user-edit',
    templateUrl: './user-edit-form.component.html',
    styleUrls: ['./user-edit-form.component.css']
})

export class UserEditFormComponent implements OnInit{
    @Inject(MAT_DIALOG_DATA) public data: any;

    constructor(){}

    ngOnInit(){
        console.log('data', this.data)
    }
}