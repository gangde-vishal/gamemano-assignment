import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../custom-hook/useFetch";

const BASE_URL = "https://dummyjson.com/products";
const Home = () => {
  const { data } = useFetch("");
  console.log(data);
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/product-list">Product List</Link>
      <Link to="/product-information/1">Product Information</Link>
    </div>
  );
};

export default Home;
