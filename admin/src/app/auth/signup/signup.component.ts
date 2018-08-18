import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms'
import { Users } from '../../user-management/user.model';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {
  signupForm: FormGroup;
  users: Users[] = [];
  usersSubscription: Subscription;
  constructor(private useService: UserService) { }

  ngOnInit() {
    this.createForm();
     this. usersSubscription = this.useService.userSubject
    .subscribe((users) => {
      console.log("This is---", users)
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
    })
  }

  onSignup(){
   
    const user: Users = {
      firstName: this.signupForm.value.firstName,
      lastName: this.signupForm.value.lastName,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password
     }

     this.useService.signupUser(user);
     this. usersSubscription = this.useService.userSubject
     .subscribe((users) => {
       this.users = users;
     });
     console.log("users are", this.users)
  }

  ngOnDestroy(){
    this.usersSubscription.unsubscribe();
  }


}
