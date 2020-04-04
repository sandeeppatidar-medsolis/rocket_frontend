export class Company {
  public id: string;
  public companyName: string;
  public companyType: string;
  public addressLine1: string;
  public addressLine2: string;
  public locality: string;
  public enabled: boolean;
  public city: string;
  public country: string;
  public postalCode: string;
  public email: string;
  public phone: string;
}

export class Location {
  public id: string;
  public addressLine1: string;
  public addressLine2: string;
  public locality: string;
  public enabled: boolean;
  public city: string;
  public country: string;
  public postalCode: string;
  public companyId: string;
}

