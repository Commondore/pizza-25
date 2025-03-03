import { Button } from "@/shared/ui/button";

import styles from "./style.module.css";
import { usePizzaContext } from "@/context/pizza-context";
import { useState } from "react";
import { Customer } from "@/interfaces/order";
import { postOrder } from "@/api/firebase";
import { Loader } from "@/shared/ui/loader";
import { useNavigate } from "react-router";

export const ContactData = () => {
  const { ings, price, initialData } = usePizzaContext();
  const [customer, setCustomer] = useState<Customer>({
    name: "",
    email: "",
    address: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // uncrontrolled input
  // const refInputName = useRef<HTMLInputElement>(null);

  // controlled input
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomer((customer) => {
      return {
        ...customer,
        [event.target.name]: event.target.value,
      };
    });
  };

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setLoading(true);
      await postOrder({ ingredients: ings, customer, price });
      initialData();
      navigate("/");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader />;

  return (
    <div className={styles.contactData}>
      <h3 className={styles.title}>Введите свои данные</h3>
      <form onSubmit={onSubmitHandler}>
        <div className={styles.group}>
          <input
            className={styles.input}
            name="name"
            value={customer.name}
            type="text"
            placeholder="Ваше имя"
            onChange={changeHandler}
          />
        </div>
        <div className={styles.group}>
          <input
            className={styles.input}
            name="email"
            value={customer.email}
            type="email"
            placeholder="Ваш email"
            onChange={changeHandler}
          />
        </div>
        <div className={styles.group}>
          <input
            className={styles.input}
            value={customer.address}
            name="address"
            type="text"
            placeholder="Ваш адрес"
            onChange={changeHandler}
          />
        </div>
        <div className={styles.group}>
          <input
            className={styles.input}
            name="phone"
            value={customer.phone}
            type="tel"
            placeholder="Ваш телефон"
            onChange={changeHandler}
          />
        </div>
        <div className={styles.group}>
          <Button type={"danger"} action={() => {}}>
            Заказать
          </Button>
        </div>
      </form>
    </div>
  );
};
