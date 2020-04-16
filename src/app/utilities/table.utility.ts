import { Validators } from '@angular/forms';
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

        "employeeList" : {

        }
    }


}
