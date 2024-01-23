export interface Product {
  _id:           string;
  name:          string;
  description:   string;
  category:      string[];
  imageUrl:      string[];
  price:         number;
  regular_price: number;
  slug?:         string;
  created_at:    Date;
  updte_at?:     Date;
}
