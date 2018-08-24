import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as env } from '../../environments/environment';

@Injectable()

export class AuthService {
    constructor(private httpClient: HttpClient) { }


    signupUser(user) {
        const headers = new HttpHeaders({ 'Content-type': 'application/json' })
        return this.httpClient.post(`${env.API_URL}/user/signup`, user,
          { observe: 'response', headers: headers })
    }

    activateUser(token) {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-type': 'application/json' })
        }

        return this.httpClient.put(`${env.API_URL}/user/activate/${token}`, httpOptions)
    }

    loginAdmin(email, password){
        const headers = new HttpHeaders({ 'Content-type': 'application/json' });
        
        return this.httpClient.post(`${env.API_URL}/user/login`, {email, password},
        {observe: 'response', headers: headers})
    }
}