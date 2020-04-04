export class Consignment {
    public id: string;
    public packageId: string;
    public noOfBox: number;
    public currentOwnerId: string;
    public nextOwnerId: string;
    public transpoterId: string;
    public enabled: boolean;
    public sendingDate: Date;
    public receivedDate: Date;
    public label: string;
    public status: string;
    public overallStatus: string;
    public companyId: string;
    public productId: string;
    public address: string;
    public latitude: string;
    public longitude: string;
    public paletLabels = new Array<string>();
    public consignments = new Array<Consignment>();

}


