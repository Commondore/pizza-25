import { Ings } from "@/interfaces/pizza";

export interface IOrder {
  ingredients: Ings;
  customer: Customer;
  price: number;
}

export interface Customer {
  name: string;
  email: string;
  address: string;
  phone: string;
}

type FirebaseID = string;

export interface FirebaseType<T> {
  [key: FirebaseID]: T;
}
