import { ContactData } from "@/components/order/contact-data";
import { CheckoutPage } from "@/pages/checkout-page";
import { PizzaPage } from "@/pages/pizza-page";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PizzaPage />} />
        <Route path="/checkout" element={<CheckoutPage />}>
          <Route path="contact-data" element={<ContactData />} />
        </Route>

        <Route path="*" element={<h1 style={{ textAlign: "center" }}>Страница не найдена</h1>} />
      </Routes>
    </>
  );
}

export default App;
