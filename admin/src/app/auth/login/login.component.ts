import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { HttpResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signinForm: FormGroup

  constructor(
    private authService: AuthService,
    private tostrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {

    this.createForm();
  }

  onLogin() {
    const email = this.signinForm.value.email;
    const password = this.signinForm.value.password;

    this.authService.loginAdmin(email, password)
      .subscribe((response: HttpResponse<any>) => {
        if (response.status == 200) {
          localStorage.clear();
          localStorage.setItem('token', response.body.token);
          localStorage.setItem('currentUser', response.body)
          this.tostrService.success('You have successfully Logged In', 'Successful',
          { timeOut: 200000, positionClass: 'toast-top-center', closeButton: true, toastClass: 'toast' })
        }
        this.router.navigate(['/manage-users']);
      })

  }

  createForm() {
    this.signinForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

}
