import CardProduct from './CardProduct';

import useProducts from '../../hooks/useProducts';
import './ProductList.css';
import { useState } from 'react';
import Buttonproducts from './Buttonproducts';
// const { REACT_APP_LOCALHOST } = process.env;

// const { REACT_APP_LOCALHOST } = process.env;

const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const { products, loading, error } = useProducts();
  if (loading) return 'Cargando....';
  if (error) return <div>{error}</div>;
  const productFiltered = () => {
    return products.slice(currentPage, currentPage + 8);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 8);
  };
  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 8);
  };

  return products.length > 0 && !products.sold ? (
    <>
      <ul className='container_productlist' style={{ listStyleType: 'none' }}>
        {productFiltered().map((product, index) => {
          return <CardProduct product={product} key={product.id} />;
        })}
      </ul>
      <Buttonproducts nextPage={nextPage} prevPage={prevPage} />
    </>
  ) : (
    <div>No hay productos</div>
  );
};

export default ProductList;
