import { Ings } from "@/interfaces/pizza";
import { createContext, useCallback, useContext, useMemo, useState } from "react";

interface ContextType {
  ings: Ings;
  addIng: (ingName: string) => void;
  removeIng: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, ingName: string) => void;
  initialData: () => void;
  price: number;
}

interface Props {
  children: React.ReactNode;
}

const PizzaContext = createContext<ContextType>({
  ings: {
    cheese: 0,
    olives: 0,
    sausage: 0,
    mushrooms: 0,
  },
  price: 100,
  addIng: () => {},
  removeIng: () => {},
  initialData: () => {},
});

const PRICES: Record<string, number> = {
  cheese: 30,
  olives: 60,
  sausage: 70,
  mushrooms: 40,
};

export const PizzaProvider = ({ children }: Props) => {
  const [ings, setIngs] = useState<Ings>({
    cheese: 0,
    olives: 0,
    sausage: 0,
    mushrooms: 0,
  });
  const [price, setPrice] = useState(100);

  const addIng = useCallback((ingName: string) => {
    setIngs((ings) => {
      return {
        ...ings,
        [ingName]: ings[ingName] + 1,
      };
    });

    setPrice((price) => price + PRICES[ingName]);
  }, []);

  const removeIng = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>, ingName: string) => {
      event.stopPropagation();

      setPrice((price) => price - PRICES[ingName] * ings[ingName]);

      setIngs((ings) => {
        return {
          ...ings,
          [ingName]: 0,
        };
      });
    },
    [ings]
  );

  const initialData = () => {
    setIngs({
      cheese: 0,
      olives: 0,
      sausage: 0,
      mushrooms: 0,
    });
    setPrice(100);
  };

  const data = useMemo(() => {
    return { ings, price, addIng, removeIng, initialData };
  }, [ings, price, addIng, removeIng]);

  return <PizzaContext.Provider value={data}>{children}</PizzaContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const usePizzaContext = () => useContext(PizzaContext);
