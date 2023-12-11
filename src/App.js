import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, ProductInfo, ProductList } from "./pages";
import { Footer, Navbar } from "./components";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/product-information/:id" element={<ProductInfo />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
