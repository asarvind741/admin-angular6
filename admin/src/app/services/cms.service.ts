import { Injectable, OnInit } from '@angular/core';
import { AboutUs } from '../models/aboutus.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class CmsService implements OnInit {
    aboutusSubject = new BehaviorSubject<any>({});

    private aboutus: AboutUs = new AboutUs(
        'About Us',
        'I am about us',
        'http://benzseo.com/images/about/about-us.jpg'
    )

    constructor(){
        this.aboutusSubject.next(this.aboutus)
    }

    ngOnInit(){
       
    }
}