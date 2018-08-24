// import { Component, OnInit, ViewChild } from '@angular/core';
// import { MatPaginator, MatTableDataSource } from '@angular/material';
// import { UserService } from '../services/user.service';
// import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
// import { Users } from './user.model';
// import { UserEditFormComponent } from './user-edit-form/user-edit-form.component';
// import { ConfirmDeleteComponent } from './confirm-delete-dialog/confirm-delete-dialog';

// @Component({
//   selector: 'app-user',
//   templateUrl: './user.component.html',
//   styleUrls: ['./user.component.css']
// })
// export class UserComponent implements OnInit {

//   displayedColumns: string[] = ['firstName', 'lastName', 'email', 'role', 'actions'];
//   dataSource = new MatTableDataSource<Users>();

//   @ViewChild(MatPaginator) paginator: MatPaginator;

//   constructor(
//     private userService: UserService,
//     private dialog: MatDialog
//   ) { }

//   ngOnInit() {
//     this.userService.userSubject
//     .subscribe((users: Users[]) => {
//       this.dataSource = new MatTableDataSource(users)
//     })
//     this.dataSource.paginator = this.paginator;
//   }
//   openDialog() {
//     let dialogRef = this.dialog.open(ConfirmDeleteComponent, {
//       width: '650px'
//     });
//   }

//   deleteAll() {
//     this.openDialog();
//   }

//   openEditDialog(user: Users) {
//     let dialogRef = this.dialog.open(UserEditFormComponent, {
//       width: '700px',
//       data: { user }
//     });
//   }
// }

// Second type


// import { Component, OnInit, ViewChild } from '@angular/core';
// import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
// import { UserService } from '../services/user.service';
// import { MatDialog, MatDialogRef } from '@angular/material';
// import { Users } from './user.model';
// import { UserEditFormComponent } from './user-edit-form/user-edit-form.component';
// import { ConfirmDeleteComponent } from './confirm-delete-dialog/confirm-delete-dialog';
// import { ExcelService } from '../services/excel.service';
// import { Observable } from 'rxjs';
// // import * as jspdf from 'jspdf'; 
// // import 'jspdf-autotable'

// declare let jsPDF: any;

// @Component({
//   selector: 'app-user',
//   templateUrl: './user.component.html',
//   styleUrls: ['./user.component.css']
// })
// export class UserComponent implements OnInit {

//   displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'actions'];
//   dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

//   @ViewChild(MatPaginator) paginator: MatPaginator;
//   @ViewChild(MatSort) sort: MatSort;

//   constructor(
//     private userService: UserService,
//     private dialog: MatDialog,
//     private excelService: ExcelService
//   ) { }

//   ngOnInit() {

//     this.dataSource.paginator = this.paginator;
//     this.dataSource.sort = this.sort;
//   }
//   openDialog() {
//     let dialogRef = this.dialog.open(ConfirmDeleteComponent, {
//       width: '650px'
//     });
//   }

//   deleteAll() {
//     this.openDialog();
//   }

//   openEditDialog(user: Users) {
//     let dialogRef = this.dialog.open(UserEditFormComponent, {
//       width: '650px',
//       data: user
//     });

//     dialogRef.afterClosed()
//       .subscribe((data) => {
//       })

//   }

//   applyFilter(value) {
//     value = value.trim().toLowerCase();
//     this.dataSource.filter = value;

//   }

//   exportAsExcelSheet() {
//     this.excelService.exportAsExcelFile(this.dataSource.data, 'users')
//   }

//   exportAsPDF() {
//     let doc = new jsPDF('p', 'pt');
//     var col = ['SN', 'Name', 'Weight', 'Symbol'];

//     var getColumns = function () {
//       return [
//         { title: "SN", dataKey: "id" },
//         { title: "Name", dataKey: "first_name" },
//         { title: "Email", dataKey: "email" },
//         { title: "City", dataKey: "city" },
//       ];
//     };
//     var rows = [];

//     for (let item of this.dataSource.data) {
//       for (let key in item) {
//         var temp = item[key];
//         rows.push(temp);
//       }
//     }
//     let dataIs = this.dataSource.data;

//     var getData = function (){
//     var data = [];

//     for (var j = 0; j < dataIs.length; j++) {
//       data.push({
//         id: dataIs[j].position,
//         first_name: dataIs[j].name,
//         email: dataIs[j].weight,
//         city: dataIs[j].symbol
//       });
//     }
//     return data;
//   }


// doc.autoTable(getColumns(), getData())
// doc.save('user.pdf');
//   }
// }

// // export class UserDataSource extends MatTableDataSource<Users>{
// //   constructor(private userService: UserService){
// //     super();
// //   }

// //   connect(): Observable<Users[]> {
// //     return this.userService.getUsers();
// //   }
// // }

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
//   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
//   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
//   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
//   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
//   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
//   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
//   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
//   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
//   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
//   { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
//   { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
//   { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
//   { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
//   { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
//   { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
//   { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
//   { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
//   { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
//   { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
// ];

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { UserService } from '../services/user.service';
import { MatDialog } from '@angular/material';
import { Users } from './user.model';
import { UserEditFormComponent } from './user-edit-form/user-edit-form.component';
import { ConfirmDeleteComponent } from './confirm-delete-dialog/confirm-delete-dialog';
import { ExcelService } from '../services/excel.service';

declare let jsPDF: any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'actions'];
  dataSource = new MatTableDataSource<Users>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private userService: UserService,
    private dialog: MatDialog,
    private excelService: ExcelService
  ) { }

  ngOnInit() {
   this.getUsers()
  }
  openDialog() {
    let dialogRef = this.dialog.open(ConfirmDeleteComponent, {
      width: '650px'
    });
  }

  deleteAll() {
    this.openDialog();
  }

  openEditDialog(user: Users) {
    let dialogRef = this.dialog.open(UserEditFormComponent, {
      width: '650px',
      data: user
    });

    dialogRef.afterClosed()
      .subscribe((user) => {
        if(user){
          this.getUsers()
        }
      })
  }

  getUsers() {
    this.userService.getUsers()
      .subscribe((users: Users[]) => {
        this.dataSource.data = users;
      })
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


applyFilter(value) {
  value = value.trim().toLowerCase();
  this.dataSource.filter = value;

}

exportAsExcelSheet() {
  this.excelService.exportAsExcelFile(this.dataSource.data, 'users')
}

exportAsPDF() {
  let doc = new jsPDF('p', 'pt');
  var col = ['SN', 'Name', 'Weight', 'Symbol'];

  var getColumns = function () {
    return [
      { title: "First Name", dataKey: "first_name" },
      { title: "Last Name", dataKey: "last_name" },
      { title: "E-mail", dataKey: "email" }
    ];
  };
  let dataIs = this.dataSource.data;

  var getData = function () {
    var data = [];

    for (var j = 0; j < dataIs.length; j++) {
      data.push({
        first_name: dataIs[j].firstName,
        last_name: dataIs[j].lastName,
        email: dataIs[j].email
      });
    }
    return data;
  }


  doc.autoTable(getColumns(), getData())
  doc.save('user.pdf');
}
}