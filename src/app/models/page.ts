export class Page {
    public paginationData: {};
    public keys: {};
    public length: number;
    public pageSize: number = 10;
    public currentPage: number = 0;
    public sort: String = '';
    public direction: String = '';
    public totalItems: number;
    public numberOfPages: number;
    public advanceSearch: boolean = false;
    public filter: String = '';
    public search: String = '';

}