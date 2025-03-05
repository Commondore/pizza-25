import { FirebaseType, IOrder } from "@/interfaces/order";
import ky from "ky";

const firebaseApi = ky.create({ prefixUrl: import.meta.env.VITE_FIREBASE_API_URL });

export const postOrder = (order: IOrder) => {
  return firebaseApi.post("orders.json", { json: order }).json();
};

export const fetchOrders = async (): Promise<FirebaseType<IOrder>> => {
  try {
    return await firebaseApi.get("orders.json").json();
  } catch (error) {
    console.log(error);
    throw new Error("Ошибка при загрузке заказов");
  }
};
