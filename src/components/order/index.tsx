import { fetchOrders } from "@/api/firebase";
import { OrderItem } from "@/components/order/order-item";
import { IOrder } from "@/interfaces/order";
import { Loader } from "@/shared/ui/loader";
import { useEffect, useState } from "react";
import styles from "./style.module.css";

interface OrderState extends IOrder {
  id: string;
}

export const Order = () => {
  const [orders, setOrders] = useState<OrderState[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders()
      .then((data) => {
        const orders = Object.keys(data).map((id) => {
          return {
            ...data[id],
            id,
          };
        });
        setOrders(orders);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;

  return (
    <ul className={styles.list}>
      {orders.toReversed().map((order, index) => {
        return <OrderItem key={order.id} {...order} number={index + 1} />;
      })}
    </ul>
  );
};
