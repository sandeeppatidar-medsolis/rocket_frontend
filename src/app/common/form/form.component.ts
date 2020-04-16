import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'ngx-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
    msg: string;
    fieldLabel: any;
    requiredBool: any;
    patternBool: boolean;
    private actionKeys: Array<any>;
    public ActionControl: any[];
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

    onSubmit(action: any) {
        this.patternBool = false;
        this.ActionControl = action.controls;

        this.actionKeys = Object.keys(action.controls);

        if (action.invalid) {
            for (let i = 0; i < this.actionKeys.length; i++) {
                if (this.ActionControl[this.actionKeys[i]].valid) {

                } else {
                    var input = document.getElementById(this.actionKeys[i]);
                    input.focus();
                    if (!this.patternBool && !this.requiredBool) {
                        this.fieldLabel = this.actionKeys[i];
                        this.patternBool = true;
                    }
                    if (this.ActionControl[this.actionKeys[i]].errors.pattern) {

                        this.msg = 'Please fill valid ' + this.actionKeys[i]
                        break;
                    } else if (this.ActionControl[this.actionKeys[i]].errors.required) {
                        this.msg = this.actionKeys[i] + ' must be filled';
                        break;

                    } else {
                        this.msg = 'There is an error in field ' + this.actionKeys[i];
                        break;
                    }

                }

            }
        }
        this.register = true;
        if (this.genericForm.invalid) {
            return;
        }
        this.onChangeEvent.emit(this.genericForm.value);
    }

}


