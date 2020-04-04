export class Packaging {
    public id: string;
    public packagingList= new Array<PackageLevel>();
    public enabled: boolean;
    public companyId: string;
}

export class PackageLevel {
    public id: string;
    public fromValue: number;
    public toValue: number;
    public fromUnit: string;
    public toUnit: string;
    public level: number;

}



