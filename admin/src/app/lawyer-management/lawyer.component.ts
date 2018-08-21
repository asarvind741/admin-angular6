import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog, MatSort, MatPaginator } from '@angular/material';
import { Users } from '../user-management/user.model';
import { UserService } from '../services/user.service';
import { ExcelService } from '../services/excel.service';
import { ConfirmDeleteComponent } from './confirm-delete-dialog/confirm-delete-dialog';
import { LawyerEditFormComponent } from './lawyer-edit-form/lawyer-edit-form.component';

@Component({
    selector: 'app-lawyer',
    templateUrl: './lawyer.component.html',
    styleUrls: ['./lawyer.component.css']
})

export class LawyerComponent implements OnInit {

    displayedColumns: string[] = ['firstName', 'lastName', 'email', 'role'];
    dataSource = new MatTableDataSource<Users>()

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(
        private dialog: MatDialog,
        private userService: UserService,
        private excelService: ExcelService
    ) { }

    ngOnInit() {
        this.userService.getUsers()
            .subscribe((users: Users[]) => {
                this.dataSource.data = users;
            })

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    openDialog() {
        let dialog = this.dialog.open(ConfirmDeleteComponent, {
            width: '650px'
        });
    }

    deleteAllLawyers(){
        this.openDialog()
    }

    openEditDialog(lawyer){
        let dialog = this.dialog.open(LawyerEditFormComponent, {
            width: '650px',
            data: lawyer
        });

        dialog.afterClosed()
        .subscribe(() => {
            console.log()
        })
    }

    applyFilter(value) {
        value = value.trim().toLowerCase();
        this.dataSource.filter = value;
    }

}