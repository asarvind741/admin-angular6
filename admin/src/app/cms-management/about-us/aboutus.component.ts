import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { CmsService } from '../../services/cms.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-about-us',
    templateUrl: './aboutus.component.html',
    styleUrls: ['./aboutus.component.css']
})

export class AboutUsComponent implements OnInit {
    aboutusForm: FormGroup;
    data: any;
    editMode: boolean = false;
    constructor(
        private cmsService: CmsService,
        private router: Router
    ){}

    ngOnInit(){
        this.cmsService.aboutusSubject
        .subscribe((data) => {
            console.log(data)
           this.data = data;
        })

        this.createForm();
        this.aboutusForm.disable()
       
    }

    createForm(){
        let title = '';
        let description = '';
        let imageUrl = '';
        let phoneNos = new FormArray([])
        if(this.data){
            title = this.data.title;
            description = this.data.description;
            imageUrl = this.data.imageUrl;
            if(this.data['phoneNos']){
                for(let phoneNo of this.data.phoneNos){
                    phoneNos.push(
                        new FormGroup({
                            'countryCode' : new FormControl(phoneNo.countryCode, Validators.required),
                            'number': new FormControl(phoneNo.number, [Validators.required, Validators.pattern('^[1-9]+$')])
                        }))
                }
            }
        }
        this.aboutusForm = new FormGroup({
            'title': new FormControl(title, Validators.required),
            'description': new FormControl(description, Validators.required),
            'imageUrl': new FormControl(imageUrl, Validators.required),
            'phoneNos': phoneNos

        })
    }

    onAddPhoneNumber(){
        const control = new FormGroup({
            'countrCode': new FormControl(null, Validators.required),
            'number': new FormControl(null, Validators.required)
        });

        (<FormArray>this.aboutusForm.get('phoneNos')).push(control);
    }

    onRemovePhoneNumber(index: number){
        (<FormArray>this.aboutusForm.get('phoneNos')).removeAt(index);
    }

    editForm(){
        this.editMode = !this.editMode;
        this.aboutusForm.enable()
    }

    clearForm(){
        this.data = {}
        this.aboutusForm = new FormGroup({
            title: new FormControl('', Validators.required),
            description: new FormControl('', Validators.required),
            imageUrl: new FormControl('', Validators.required)
        })
    }

    cancelForm(){
        this.aboutusForm.reset();
        this.router.navigate(['../manage-users'])

    }

    submitForm(){
        console.log(this.aboutusForm.value)
    }
}