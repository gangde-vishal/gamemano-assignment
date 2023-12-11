import React, { useEffect } from "react";
import RightArrow from "../assets/images/right-arrow.svg";
import ProductLogo from "../assets/images/product-logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/allProducts/allProductSlice";
import Loading from "../components/loading/Loading";
import { Link } from "react-router-dom";
import { getProduct } from "../features/product/productSlice";
import {
  getCategories,
  handleChange,
  getCategorizedProducts,
} from "../features/category/categorySlice";

const ProductList = () => {
  const { isLoading, products } = useSelector((store) => store.allProducts);
  const { categories, categoryFilter, categorizedProducts } = useSelector(
    (store) => store.categories
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (categoryFilter === "all") {
      dispatch(getAllProducts());
    } else {
      dispatch(getCategorizedProducts(categoryFilter));
    }
    dispatch(getCategories());
  }, [categoryFilter]);

  if (isLoading) {
    return <Loading />;
  }

  const handleFilter = (e) => {
    dispatch(handleChange({ name: e.target.name, value: e.target.value }));
  };
  return (
    <>
      <section className="section-hero">
        <div className="hero">
          <div className="hero-text-box">
            <img
              src={ProductLogo}
              alt="product-logo"
              className="product-logo"
            />
          </div>
        </div>
      </section>
      {/* PRODUCT SECTION  */}
      <section className="section-all-product">
        <div className="all-products">
          <div className="all-products-box">
            <div className="all-product">
              <h3 className="filtered-products-title">
                {/* <ion-icon name="chevron-forward-outline"></ion-icon>
                <ion-icon name="chevron-forward-outline"></ion-icon>{" "} */}

                {`>>${categoryFilter}`}
              </h3>
              <select
                name="categoryFilter"
                id="categoryFilter"
                value={categoryFilter}
                onChange={handleFilter}
              >
                <option value="all">All Products</option>
                {categories &&
                  categories.map((category, index) => {
                    return (
                      <option
                        key={index}
                        value={category}
                        className="category-data"
                      >
                        {category}
                      </option>
                    );
                  })}
              </select>
            </div>

            <div className="container grid grid--3--cols margin-bottom-md">
              {categoryFilter === "all"
                ? products &&
                  products.map((product) => {
                    const { id, brand, title, thumbnail } = product;
                    return (
                      <div className="products" key={id}>
                        <div className="product-content">
                          <div className="product-header">
                            <p className="product-header-title">{brand}</p>
                            <ion-icon name="heart-outline"></ion-icon>
                          </div>
                          <img
                            src={thumbnail}
                            alt={title}
                            className="product-img"
                          />
                          <p className="product-title">{title}</p>
                          <div className="view-btn-container">
                            <Link
                              className="view-btn"
                              onClick={() => dispatch(getProduct(id))}
                              to={`/product-information/${id}`}
                            >
                              view
                              <img
                                src={RightArrow}
                                alt="RightArrow"
                                className="right-arrow"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : categorizedProducts &&
                  categorizedProducts.map((product) => {
                    const { id, brand, title, thumbnail } = product;
                    return (
                      <div className="products" key={id}>
                        <div className="product-content">
                          <div className="product-header">
                            <p className="product-header-title">{brand}</p>
                            <ion-icon name="heart-outline"></ion-icon>
                          </div>
                          <img
                            src={thumbnail}
                            alt={title}
                            className="product-img"
                          />
                          <p className="product-title">{title}</p>
                          <div className="view-btn-container">
                            <Link
                              to={`/product-information/${id}`}
                              className="view-btn"
                              onClick={() => dispatch(getProduct(id))}
                            >
                              view
                              <img
                                src={RightArrow}
                                alt="RightArrow"
                                className="right-arrow"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductList;
