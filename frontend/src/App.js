import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Checkout from "./component/Checkout";
import Paypal from "./component/Paypal";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Checkout />} />
          <Route path="/place-order" element={<Paypal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
