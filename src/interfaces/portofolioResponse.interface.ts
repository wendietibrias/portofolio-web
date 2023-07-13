
export interface IPortofolioResponse {
    title:string;
    thumbnail:any;
    excerpt:string;
    website:string;
    repository:string;
    created_at:any;
    technology:[{
        key:string;
        title:string;
        icon:string;
    }];
    category:string;
}