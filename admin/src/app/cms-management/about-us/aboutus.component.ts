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
    fileURL: any;
    acceptFile
    constructor(
        private cmsService: CmsService,
        private router: Router
    ) { }

    ngOnInit() {
        this.cmsService.aboutusSubject
            .subscribe((data) => {
                console.log(data)
                this.data = data;
            })

        this.createForm();
        this.aboutusForm.disable()

    }

    createForm() {
        let title = '';
        let description = '';
        let imageUrl = '';
        let phoneNos = new FormArray([])
        if (this.data) {
            title = this.data.title;
            description = this.data.description;
            imageUrl = this.data.imageUrl;
            if (this.data['phoneNos']) {
                for (let phoneNo of this.data.phoneNos) {
                    phoneNos.push(
                        new FormGroup({
                            'countryCode': new FormControl(phoneNo.countryCode, Validators.required),
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

    onAddPhoneNumber() {
        const control = new FormGroup({
            'countryCode': new FormControl(null, Validators.required),
            'number': new FormControl(null, Validators.required)
        });

        (<FormArray>this.aboutusForm.get('phoneNos')).push(control);
    }

    onRemovePhoneNumber(index: number) {
        (<FormArray>this.aboutusForm.get('phoneNos')).removeAt(index);
    }

    editForm() {
        this.editMode = !this.editMode;
        this.aboutusForm.enable()
    }

    clearForm() {
        this.data = {}
        this.aboutusForm = new FormGroup({
            title: new FormControl('', Validators.required),
            description: new FormControl('', Validators.required),
            imageUrl: new FormControl('', Validators.required)
        })
    }

    cancelForm() {
        this.aboutusForm.reset();
        this.router.navigate(['../manage-users'])

    }

    deleteImage() {

        delete this.data.imageUrl;
    }

    handleFileInput(event) {
        const reader = new FileReader();
       
        let file = event.target.files[0];
        this.aboutusForm.get('imageUrl').setValue(file)

        reader.readAsDataURL(this.data.imageUrl);

        reader.onload = (event: Event) => {
            // this.data.imageUrl = event.target.result;- Invalid as it will throw an error but it will run
            this.fileURL = reader.result;
            console.log(this.fileURL)
        }

    }

    private prepareForSave(): any {
        let formData = new FormData();
        formData.append('Title', this.aboutusForm.get('title').value);
        formData.append('Description', this.aboutusForm.get('description').value);
        formData.append('Image', this.aboutusForm.get('imageUrl').value);

        formData.append('Contacts', this.aboutusForm.get('phoneNos').value)
        return formData;

    }

    

    submitForm() {
        let formData = this.prepareForSave()
        console.log(formData)
    }
}