## Các chức năng cần làm:
---

### Component tree:
```
< E-commerce >
    <ProductFilter /> `state: [productList,setProductList]
    <Product List />
        <Product />
    <Cart />
        <CartItem />
```
1. Render product từ productList
2. Add product vào cart -> check product đã exist ? quantity = 1 : quantity +
