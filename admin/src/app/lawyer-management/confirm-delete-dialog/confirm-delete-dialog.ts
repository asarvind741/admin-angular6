import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'confirm-delete',
    templateUrl: './confirm-delete-dialog.html',
    styleUrls: ['./confirm-delete-dialog.css']
})

export class ConfirmDeleteComponent implements OnInit{

    constructor(
        public dialogRef: MatDialogRef<ConfirmDeleteComponent>,
        private userService: UserService
    ){}

    ngOnInit(){
    }

    deleteAll(){
        this.userService.deleteAllLawyers();
        this.dialogRef.close();
    }

    closeDialog(){
        this.dialogRef.close();
    }
}