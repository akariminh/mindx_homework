import React from 'react'
import ProductItem from './ProductItem/ProductItem'
const Product = (props) => {
  const { productsList = [], addProductToCart} = props;
    const productListRender = productsList.map((product) => {
      return (
        <ProductItem
          product={product}
          addProductToCart={addProductToCart}
          key={product.id}
          />
      );
  });
  return (<div className="list-wrapper">
      {productListRender}
  </div>)
}
export default Product