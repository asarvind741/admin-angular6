import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpResponse } from '@angular/common/http';

@Component({
    selector: 'app-activate-admin',
    templateUrl: './activation.component.html',
    styleUrls: ['./activation.component.css']
})

export class ActivateComponent implements OnInit {
    token: string;
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private authService: AuthService
    ){

    }

    ngOnInit(){
        this.route.params.subscribe((params: Params) => {
            this.token = params['token'];
           
        })
        this.authService.activateUser(this.token)
        .subscribe((response: HttpResponse<any>) => {
        })
    }
}