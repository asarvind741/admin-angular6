import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialog, MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { HttpResponse } from '@angular/common/http';

@Component({
    selector: 'lawyer-edit',
    templateUrl: './lawyer-edit-form.component.html',
    styleUrls: ['./lawyer-edit-form.component.css']
})

export class LawyerEditFormComponent implements OnInit{
    
    editUserForm: FormGroup;

    constructor(
        private dialogRef: MatDialogRef<LawyerEditFormComponent>,
        @Inject(MAT_DIALOG_DATA) public user: any,
        private userService: UserService
    ){}

    ngOnInit(){
        this.createForm();
        
    }

    createForm(){
        this.editUserForm = new FormGroup({
            firstName : new FormControl(this.user.firstName, Validators.required),
            lastName: new FormControl(this.user.lastName, Validators.required),
            email: new FormControl(this.user.email, Validators.email),
            role: new FormControl(this.user.role, Validators.required)
        })
    }

    onSave(){
        const firstName = this.editUserForm.value.firstName;
        const lastName = this.editUserForm.value.lastName;
        const email = this.editUserForm.value.email;
        const role = this.editUserForm.value.role;
        const updatedUser = { firstName: firstName, lastName: lastName, email: email, role: role}
        this.userService.updateUser(updatedUser)
        .subscribe((response: HttpResponse<any>) => {
            console.log("response is", response);
        })
    }

    onCancel(){
        
        this.dialogRef.close();
    }

}