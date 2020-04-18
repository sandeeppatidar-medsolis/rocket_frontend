import { DatePipe } from '@angular/common';
import { AppConstants } from '../constants/app.constants';

export class TableUtility {
  public static getColumn(componentName) {
    return this.components[componentName];
  }
  private static components = {

    "roleList": {
      name: {
        title: 'Name',
        type: 'string', width: '250px',
      },
      displayName: {
        title: 'Display Name',
        type: 'string', width: '250px',
      },
      createdBy: {
        title: 'Created By',
        type: 'string', width: '250px',
      },
      createdDate: {
        title: 'Created At',
        type: 'date', width: '250px',
        valuePrepareFunction: (date) => {
          return new DatePipe('en-US').transform(date, AppConstants.DATE_FORMATE);
        },
      },
    },

    "employeeList": {
      firstName: {
        title: 'First Name',
        type: 'string', width: '250px',
      },
      latName: {
        title: 'Last Name',
        type: 'string', width: '250px',
      },
      gender: {
        title: 'Gender',
        type: 'string', width: '250px',
      },
      dateOfBirth: {
        title: 'Date Of Birth',
        type: 'date', width: '250px',
        valuePrepareFunction: (date) => {
          return new DatePipe('en-US').transform(date, AppConstants.DATE_FORMATE);
        }
      },
      dateOfJoining: {
        title: 'Date Of Joining',
        type: 'date', width: '250px',
        valuePrepareFunction: (date) => {
          return new DatePipe('en-US').transform(date, AppConstants.DATE_FORMATE);
        }
      },
      mobileNumber: {
        title: 'Mobile Number',
        type: 'string', width: '250px',
      },
      email: {
        title: 'Email',
        type: 'string', width: '250px',
      },
      salary: {
        title: 'Salary',
        type: 'string', width: '250px',
      },
      createdBy: {
        title: 'Created By',
        type: 'string', width: '250px',
      },
      createdDate: {
        title: 'Created At',
        type: 'date', width: '250px',
        valuePrepareFunction: (date) => {
          return new DatePipe('en-US').transform(date, AppConstants.DATE_FORMATE);
        },
      },
    },
    "branchList": {
      branchName: {
        title: 'Branch Name',
        type: 'string', width: '250px',
      },
      city: {
        title: 'City',
        type: 'string', width: '250px',
      },
      state: {
        title: 'State',
        type: 'string', width: '250px',
      },
      country: {
        title: 'Country',
        type: 'string', width: '250px',
      },
      createdBy: {
        title: 'Created By',
        type: 'string', width: '250px',
      },
      createdDate: {
        title: 'Created At',
        type: 'date', width: '250px',
        valuePrepareFunction: (date) => {
          return new DatePipe('en-US').transform(date, AppConstants.DATE_FORMATE);
        },
      },
    }
  }
}

