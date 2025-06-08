export interface IProduct {
  id: string;
  name: string;
  description: string;
  image: string;
  infos: IProductInfo[];
  technicalSpecification: string;
}

export interface IProductInfo {
  title: string;
  description: string;
}
