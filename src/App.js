import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import Cart from "./components/Cart";

import Header from "./components/Header";
import Product from "./components/Product";

function App() {
  return (
    <>
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/product" element={<Product/>}/>
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
