
declare var $:any;
export class NotificatonUtility {

    public static notify(title,msg,type)
    {
        // let icon;
        // if(type == 'success')
        // {
        //    icon = "ti-check";
        // }
        // if(type == 'danger')
        // {
        //     icon = "ti-comment-alt";
        // }
        // if(type == 'warning')
        // {
        //     icon = "ti-help";
        // }
        // if(type == 'info')
        // {
        //     icon = "ti-info";
        // }
        $.notify({
            
            title: title,
            message: msg,
        },{
                type: type
            });
        }
    }
