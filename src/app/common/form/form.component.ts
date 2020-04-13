import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'ngx-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
    public genericForm: FormGroup;
    public register = false;
    @Input() formInput: any;
    @Output() onChangeEvent: EventEmitter<any> = new EventEmitter();

    constructor(private router: Router, public formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.formInput.element.map(obj => ({ ...obj, focusTouched: false }));
        // this.genericForm = this.formBuilder.group({
        //     email: ['', [Validators.required, Validators.email]],
        //     name: ['', [Validators.required]],
        //     mobileNumber: ['', [Validators.required]],
        //     country: ['', [Validators.required]],
        //     address: ['', [Validators.required]],
        //     accept: ['', [Validators.required]],
        //     dob: ['', [Validators.required]]
        // })
        let customGroup = {};
        this.formInput.element.map((form) => {
            customGroup[form.name] = ['', form.validation != null ? form.validation : []]
        })
        this.genericForm = this.formBuilder.group(customGroup);
    }

    get genericF() {
        return this.genericForm.controls;
    }

    cancel(): void {
        this.router.navigate(['crm/role']);
    }

    onSubmit() {
        this.register = true;
        if (this.genericForm.invalid) {
            return;
        }
        this.onChangeEvent.emit(this.genericForm.value);
    }

}


