import React from 'react';

import Footer from '../../components/footer/Footer';
import JustNav from '../../components/justNavHeader/JustNav';
import { ButtonNewOffer } from '../../components/offers/ButtonNewOffer';
import ProductPhoto from '../../components/products/ProductPhoto';
import ProductSingleData from '../../components/products/ProductSingleData';
import UserMapProduct from '../../components/products/UserMapProduct';
import useProductDetail from '../../hooks/useProductDetail';
import './Product.css';
// Página Producto en Detalle
const Product = (props) => {
  const { product } = useProductDetail();
  return (
    <>
      <JustNav />

      <ProductPhoto />
      <ProductSingleData />

      <ButtonNewOffer idProduct={product.id} idUser={product.idUser} />
      <div className='leaflet-container'>
        <UserMapProduct />
      </div>
      <Footer />
    </>
  );
};

export default Product;
