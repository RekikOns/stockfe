import { Category } from "../categories/category";

export interface Article {
    id: number;
  name: string;
  quantity: number;
  price: number;
 category: Category; 
}
