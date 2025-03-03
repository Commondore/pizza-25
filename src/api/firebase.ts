import { IOrder } from "@/interfaces/order";
import ky from "ky";

const firebaseApi = ky.create({ prefixUrl: import.meta.env.VITE_FIREBASE_API_URL });

export const postOrder = (order: IOrder) => {
  return firebaseApi.post("orders.json", { json: order }).json();
};
