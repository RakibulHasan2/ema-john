import React, {useState, useEffect}  from 'react';
import './Shop.css'
import Product from './../Product/Product';
import Cart from './../Cart/Cart';
const Shop = () => {

   const [products, setProducts] = useState([])
   const [carts, setCart] = useState([])


   useEffect(() =>{
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))

   }, [])

   const handleAddToCart = (product) => {
    // console.log(product);
    const newCart = [...carts, product];
    setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div  className='products-container'>
               {
                products.map(product => <Product
                key = {product.id}
                product = {product}
                handleAddToCart = {handleAddToCart}
                ></Product>)
               }
            </div>
            <div className='cart-container'>
             <Cart carts = {carts}></Cart>
            </div>
        </div>
    );
};

export default Shop;