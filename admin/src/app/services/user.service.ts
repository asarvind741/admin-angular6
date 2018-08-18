import { Injectable, OnInit } from '@angular/core';
import { Users } from '../user-management/user.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class UserService implements OnInit {
    users: Users[] = [];
    userSubject = new BehaviorSubject<Users[]>([])

    constructor(){}

    ngOnInit(){
        this.userSubject.next(this.users);
    }

    signupUser(user: Users){
        this.users.push(user);
        this.userSubject.next(this.users);
    }

    deleteAllUsers(){
        this.users = [];
        this.userSubject.next(this.users);
    }
    

}