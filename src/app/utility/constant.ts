export class AppConstants {
	// Web module	
	public static webUrl: String = "https://portfolio-management-system.000webhostapp.com/api/";

	public static baseUrl: String = 'http://103.21.52.30:8084/';
	public static baseUrl1: String = 'http://103.21.52.30:8083/';

	
	public static opportunityDocumentUrl: String = 'http://103.21.52.30:8084/documents';
	public static invoiceDocumentUrl: String = 'http://103.21.52.30:8084/invoicedoc';
	public static bagSpecificationUrl: String = 'http://103.21.52.30:8084/specification/';

	//news feed	
	public static rssToJsonServiceBaseUrl: string = 'https://rss2json.com/api.json?rss_url=';
	public static rssUrl: string = 'https://news.google.com/news/rss/headlines/section/topic/BUSINESS?ned=us&hl=en&gl=GB';

	public static dateFormatWithTime: string = 'yyyy-MM-dd HH:mm:ss';

	public static dateFormat: string = 'dd-MMM-yyyy hh:mm a';
	public static dateFormatWith24F: string = 'dd-MMM-yyyy HH:mm';

	public static dateFormateWithoutTime = 'dd-MMM-yyyy';
	public static dateFormateWithoutTimeDatePicker = 'dd/MM/yyyy';

	public static basicAuthkey = "ZGV2Z2xhbi1jbGllbnQ6ZHVy";

	public static modules: any = {
	auth: "auth/api/",
		registration: "registration/",
		activeuser: "activeuser/",
		administrator: "administrator/api/",
		businessProcess: "business-process/api/",
		party: "party/api/",
		
		opportunity: "opportunity/api/",
		inventory: "inventory/api/",
		purchase: "purchase/api/",
		production: "production/api/",
		qualitycontrol: "quality-control/api/"

	};
	public static roles = ['superManager', 'systemManager', 'salesExecutive',
	 'technicalAudit', 'financialAudit', 'leadBgVerify',
	  'cfoExecutive', 'logisticExecutive', 'packagingExecutive', 
	  'HOD', 'storeIncharge', 'purchaseOfficer', 'purchaseHead',
	  'qualityControlHead','qualityControlAnalyer'];



	// file Size	
	public static fileSize: number = 1e+7;

	//number field pattern
	public static numPattern:string="^0*([0-9][0-9]?([.][0-9]{1,2})?|100([.][0-9]{1,2})?|[0-9][0-9][0-9]?([.][0-9]{1,2})?|1000([.][0-9]{1,2})?|[0-9][0-9][0-9][0-9]?([.][0-9]{1,2})?|10000([.]0{1,2})?|[0-9][0-9][0-9][0-9][0-9]?([.][0-9]{1,2})?|100000([.]0{1,2})?|[0-9][0-9][0-9][0-9][0-9][0-9]?([.][0-9]{1,2})?|1000000([.]0{1,2})?|[0-9][0-9][0-9][0-9][0-9][0-9][0-9]?([.][0-9]{1,2})?|10000000([.]0{1,2})?|[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]?([.][0-9]{1,2})?|100000000([.]0{1,2})?|[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]?([.][0-9]{1,2})?|100000000([.]0{1,2})?|[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]?([.][0-9]{1,2})?|100000000([.]0{1,2})?)$"

}
