import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialog, MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'user-edit',
    templateUrl: './user-edit-form.component.html',
    styleUrls: ['./user-edit-form.component.css']
})

export class UserEditFormComponent implements OnInit{
    
    editUserForm: FormGroup;

    constructor(
        private dialogRef: MatDialogRef<UserEditFormComponent>,
        @Inject(MAT_DIALOG_DATA) public user: any
    ){}

    ngOnInit(){
        this.createForm();
        
    }

    createForm(){
        this.editUserForm = new FormGroup({
            firstName : new FormControl(this.user.name, Validators.required),
            lastName: new FormControl(this.user.weight, Validators.required),
            email: new FormControl(this.user.symbol, Validators.email)
        })
    }

    onSave(){
        console.log("form", this.editUserForm.value)
    }

    onCancel(){
        
        this.dialogRef.close();
    }

}