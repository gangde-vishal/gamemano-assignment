import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, ProductInformation, ProductList } from "./pages";
import { Footer, Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product-list" element={<ProductList />} />
          <Route
            path="product-information/:id"
            element={<ProductInformation />}
          />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
