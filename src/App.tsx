import { Layout } from "@/components/layout";
import { ContactData } from "@/components/order/contact-data";
import { CheckoutPage } from "@/pages/checkout-page";
import { PizzaPage } from "@/pages/pizza-page";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PizzaPage />} />
          <Route path="checkout" element={<CheckoutPage />}>
            <Route path="contact-data" element={<ContactData />} />
          </Route>

          <Route path="*" element={<h1 style={{ textAlign: "center" }}>Страница не найдена</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
