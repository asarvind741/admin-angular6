import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms'
import { Users } from '../../user-management/user.model';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {
  signupForm: FormGroup;
  users: Users[] = [];
  usersSubscription: Subscription;
  constructor(
    private useService: UserService,
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.createForm();
     this. usersSubscription = this.useService.userSubject
    .subscribe((users) => {
      this.users = users;
    });

  }

  createForm(){
    this.signupForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(4)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
      buyer: new FormControl('')
    })
  }

  onSignup(){
   
    const user: Users = {
      firstName: this.signupForm.value.firstName,
      lastName: this.signupForm.value.lastName,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password,
     }

     this.authService.signupUser(user)
     .subscribe((response: HttpResponse<any>) => {
       console.log("response", response.status)
      if(response.status == 200){
        this.toastrService.success('Thanks for registration. Please check your email for activating your account', 'Successful',
        { timeOut: 200000, positionClass: 'toast-top-full-width', closeButton: true, toastClass: 'toast' });
      }

      this.router.navigate(['/']);
     })
  }

  ngOnDestroy(){
    this.usersSubscription.unsubscribe();
  }


}
