import { Injectable, OnInit } from '@angular/core';
import { Users } from '../user-management/user.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import * as env from '../../environments/environment';

@Injectable()

export class UserService implements OnInit {
    users: Users[] = [];
    userSubject = new BehaviorSubject<Users[]>([])

    constructor( private httpClient: HttpClient){}

    ngOnInit(){
        this.userSubject.next(this.users);
    }

    signupUser(user: Users){
        // this.users.push(user);
        // this.userSubject.next(this.users);
    }

    deleteAllUsers(){
        // this.users = [];
        // this.userSubject.next(this.users);
    }

    getUsers(){
        const headers = new HttpHeaders({'Content-type': 'application/json'});

        return this.httpClient.get(`${env.environment.API_URL}/users`,
                { observe: 'body', headers: headers})
    }

    updateUser(user){
        const headers = new HttpHeaders({'Content-type': 'application/json'});
        const httpOptions = {
            headers: headers
        }
        return this.httpClient.put(`${env.environment.API_URL}/user/edit`, user,httpOptions)
    }

    getLawyers(){
        const headers = new HttpHeaders({'Content-type': 'application/json'})

        return this.httpClient.get(`${env.environment.API_URL}/lawyer`, 
        {observe: 'body', headers: headers})
    }

    deleteAllLawyers(){
        
    }
    

}