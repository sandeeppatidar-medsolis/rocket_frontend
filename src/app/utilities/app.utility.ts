export class AppUtility {

    public static isEmptyObject(object): boolean {
        for (const key in object) {
            if (object.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    public static isEmptyString(str): boolean {
        return (!str || 0 === str.length);
    }


    public static isAdmin(): boolean {
        let isAdminUser = false;
        const data = localStorage.getItem('token');
        if (data != null) {
            const roles = JSON.parse(data);
            let array = [];
            array = roles.role;
            array.forEach(function (role, index) {
                if (role === 'ROLE_ADMIN') {
                    isAdminUser = true;
                }
            });
        }
        return isAdminUser;
    }

    public static getCompanyId() {
        const data = localStorage.getItem('token');
        let companyId = '';
        if (data != null) {
            const token = JSON.parse(data);
            companyId = token.companyId;
        }
        return companyId;
    }
}