export interface Products {
  _id?: string;
  title: string;
  image: string;
  description: string;
  category: string;
  price: number;
  condition: string;
  quantity: number;
  promo: {onPromo:boolean, promoDesc:string, newPrice:number,startDate:Date,endDate:Date,};
  added:Date;
  updated:Date;
}
