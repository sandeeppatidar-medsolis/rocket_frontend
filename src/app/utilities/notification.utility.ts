import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

declare var Noty: any;

@Injectable()
export class NotificationUtility {
  private toastClass:string;
    constructor(private toastr: ToastrService) {

    }

    public notify(message: string, status: string) {
        switch(status)
        {
            case 'info':
                this.toastClass = 'alert alert-info alert-with-icon'
                break;
                case 'success':
                    this.toastClass = 'alert alert-success alert-with-icon'
                    break;
                    case 'warning':
                    this.toastClass = 'alert alert-warning alert-with-icon'
                    break;
                    case 'danger':
                    this.toastClass = 'alert alert-danger alert-with-icon'
                    break;
                    case 'primary':
                    this.toastClass = 'alert alert-primary alert-with-icon'
                    break;
        default:
        break;
        }
        this.toastr.info('<span class="now-ui-icons ui-1_bell-53"></span>' + message, '', {
            timeOut: 8000,
            closeButton: true,
            enableHtml: true,
            toastClass: this.toastClass,
            positionClass: 'toast-' + 'top' + '-' +  'right'
          });
    }

}
