import { Validators } from '@angular/forms';

export class FormUtility {
    public static getForm(componentName) {
        return this.components[componentName];
    }
    private static components = {

        "roleAdd": {
            cancel: 'crm/role',
            save: '',
            element: [
                {
                    type: 'input',
                    subType: 'text',
                    name: 'Role',
                    id: 'Role',
                    required: true,
                    label: 'Role',
                    placeholder: 'Enter Role',
                    value: '',
                    validation: [Validators.required]
                },
                {
                    type: 'input',
                    subType: 'text',
                    name: 'Display Name',
                    id: 'Display Name',
                    required: true,
                    label: 'Display Name',
                    placeholder: 'Enter Display Name',
                    value: '',
                    validation: [Validators.required]
                },
            ]
        },

        "employeeAdd":
        {
            cancel: 'crm/employee',
            save: '',
            element: [
                {
                    type: 'input',
                    subType: 'text',
                    name: 'First Name',
                    id: 'First Name',
                    required: true,
                    label: 'First Name',
                    placeholder: 'Enter First Name',
                    value: '',
                    validation: [Validators.required]
                },
                {
                    type: 'input',
                    subType: 'text',
                    name: 'Last Name',
                    id: 'Last Name',
                    required: true,
                    label: 'Last Name',
                    placeholder: 'Enter Last Name',
                    value: '',
                    validation: [Validators.required]
                },
                {
                    type: 'select',
                    name: 'Gender',
                    id: 'Gender',
                    required: true,
                    label: 'Gender',
                    placeholder: 'Select Gender',
                    option: [{ key: 'Male', value: 'Male' }, { key: 'Female', value: 'Female' }],
                    value: '',
                    validation: [Validators.required]
                },
                {
                    type: 'datepicker',
                    name: 'DOB',
                    id: 'DOB',
                    required: true,
                    label: 'Date of Birth',
                    placeholder: 'Select DOB',
                    value: '',
                    validation: [Validators.required]
                },
                {
                    type: 'datepicker',
                    name: 'DOJ',
                    id: 'DOJ',
                    required: true,
                    label: 'Date of Joining',
                    placeholder: 'Select DOJ',
                    value: '',
                    validation: [Validators.required]
                },
                {
                    type: 'input',
                    subType: 'number',
                    name: 'Mobile Number',
                    id: 'Mobile Number',
                    required: true,
                    label: 'Mobile Number',
                    placeholder: 'Enter Mobile Number',
                    value: '',
                    validation: [Validators.required]
                },
                {
                    type: 'input',
                    subType: 'Email',
                    name: 'Email',
                    id: 'Email',
                    required: false,
                    label: 'Email Id',
                    placeholder: 'Enter Email',
                    value: '',
                    validation: [Validators.required, Validators.email]
                },
                {
                    type: 'textarea',
                    name: 'Address',
                    id: 'Address',
                    required: false,
                    label: 'Address',
                    placeholder: 'Enter Address',
                    rows: 2,
                    value: '',
                    validation: [Validators.required]
                },
                {
                    type: 'select',
                    name: 'City',
                    id: 'City',
                    required: true,
                    label: 'City',
                    placeholder: 'Select City',
                    option: [],
                    value: '',
                    validation: [Validators.required]
                },
                {
                    type: 'select',
                    name: 'State',
                    id: 'State',
                    required: true,
                    label: 'State',
                    placeholder: 'Select State',
                    option: [],
                    value: '',
                    validation: [Validators.required]
                },
                {
                    type: 'select',
                    name: 'Country',
                    id: 'Country',
                    required: true,
                    label: 'Country',
                    placeholder: 'Select Country',
                    option: [],
                    value: '',
                    validation: [Validators.required]
                },
                {
                    type: 'input',
                    subType: 'text',
                    name: 'Account Holder Name',
                    id: 'Account Holder Name',
                    required: true,
                    label: 'Account Holder Name',
                    placeholder: 'Enter Account Holder Name',
                    value: '',
                    validation: [Validators.required]
                },
                {
                    type: 'input',
                    subType: 'number',
                    name: 'Account Number',
                    id: 'Account Number',
                    required: true,
                    label: 'Account Number',
                    placeholder: 'Enter Account Number',
                    value: '',
                    validation: [Validators.required]
                },
                {
                    type: 'input',
                    subType: 'text',
                    name: 'IFSC Code',
                    id: 'IFSC Code',
                    required: true,
                    label: 'IFSC Code',
                    placeholder: 'Enter IFSC Code',
                    value: '',
                    validation: [Validators.required]
                },

                {
                    type: 'input',
                    subType: 'number',
                    name: 'Salary',
                    id: 'Salary',
                    required: true,
                    label: 'Salary',
                    placeholder: 'Enter Salary',
                    value: '',
                    validation: [Validators.required]
                },
                {
                    type: 'select',
                    name: 'Branch',
                    id: 'Branch',
                    required: true,
                    label: 'Branch',
                    placeholder: 'Select Branch',
                    option: [],
                    value: '',
                    validation: [Validators.required]
                },
                {
                    type: 'input',
                    subType: 'text',
                    name: 'User Name',
                    id: 'User Name',
                    required: false,
                    label: 'User Name',
                    placeholder: 'Enter User Name',
                    value: '',
                    // validation: [Validators.required]
                },
                {
                    type: 'input',
                    subType: 'password',
                    name: 'Password',
                    id: 'Password',
                    required: false,
                    label: 'Password',
                    placeholder: 'Enter Password',
                    value: '',
                    // validation: [Validators.required]
                },
            ]
        },

        branchAdd:
        {
            cancel: 'crm/branch',
            save: '',
            element: [
                {
                    type: 'input',
                    subType: 'text',
                    name: 'Branch Name',
                    id: 'Branch Name',
                    required: true,
                    label: 'Branch Name',
                    placeholder: 'Enter Branch Name',
                    value: '',
                    validation: [Validators.required]
                },
                {
                    type: 'textarea',
                    name: 'Address',
                    id: 'Address',
                    required: false,
                    label: 'Address',
                    placeholder: 'Enter Address',
                    rows: 2,
                    value: '',
                    validation: [Validators.required]
                },
                {
                    type: 'select',
                    name: 'City',
                    id: 'City',
                    required: true,
                    label: 'City',
                    placeholder: 'Select City',
                    option: [],
                    value: '',
                    validation: [Validators.required]
                },
                {
                    type: 'select',
                    name: 'State',
                    id: 'State',
                    required: true,
                    label: 'State',
                    placeholder: 'Select State',
                    option: [],
                    value: '',
                    validation: [Validators.required]
                },
                {
                    type: 'select',
                    name: 'Country',
                    id: 'Country',
                    required: true,
                    label: 'Country',
                    placeholder: 'Select Country',
                    option: [],
                    value: '',
                    validation: [Validators.required]
                },
                {
                    type: 'input',
                    subType: 'text',
                    name: 'Account Holder Name',
                    id: 'Account Holder Name',
                    required: true,
                    label: 'Account Holder Name',
                    placeholder: 'Enter Account Holder Name',
                    value: '',
                    validation: [Validators.required]
                },
                {
                    type: 'input',
                    subType: 'number',
                    name: 'Account Number',
                    id: 'Account Number',
                    required: true,
                    label: 'Account Number',
                    placeholder: 'Enter Account Number',
                    value: '',
                    validation: [Validators.required]
                },
                {
                    type: 'input',
                    subType: 'text',
                    name: 'IFSC Code',
                    id: 'IFSC Code',
                    required: true,
                    label: 'IFSC Code',
                    placeholder: 'Enter IFSC Code',
                    value: '',
                    validation: [Validators.required]
                },
            ]
        }



    };

}
