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

export interface IProductSummary {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface IProductList {
  products: IProductSummary[];
  total: number;
}

export interface IPokemon {
  id: string;
  name: string;
  url: string;
}
