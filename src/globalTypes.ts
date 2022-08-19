export interface ProductInterface {
  name: string;
  price: number;
  image: string;
  title: string;
  category: string;
  description: string
  rating: {
    rate: number;
    count: number;
  };
  id: number;
}

export interface StateInterface {
  products: ProductInterface[];
  shoppingCart: ProductInterface[];
}

export interface ActionInterface {
  type: string;
  payload: unknown;
}
