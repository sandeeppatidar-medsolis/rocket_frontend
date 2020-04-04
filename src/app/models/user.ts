export class User {
    public id: string;
    public username: string;
    public email: string;
    public subCompanyId: string;
    public companyId: string;
    public name: string;
    public enabled: boolean;
    public loginAttempt: boolean;
    public accountNonExpired: boolean;
    public accountNonLocked: boolean;
    public credentialsNonExpired: boolean;
    public roles = new Array<any>();
    public privileges: [];
    public phone: string;
    public companyName: string;
    public address: string;

}
