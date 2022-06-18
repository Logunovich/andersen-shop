import styles from './productList.module.css';

import { useEffect, useState } from 'react';

import ProductItem from '../productItem';
import Button from '../button';
import StoreService from '../../services/StoreService';
import Spinner from '../spinner/Spinner';
import ErrorFetch from '../errorFetch/ErrorFetch';


const ProductList = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  
  const storeService = new StoreService();

  useEffect(() => {
    storeService.getAllProducts()
      .then(productsLoaded)
      .catch(() => {
        setLoading(false);
        setError(true);
      })
  }, []);

  const productsLoaded = (products) => {
    setProducts(products);
    setLoading(false);
  }

  const renderProducts = () => {
    const result = products.map((item) => {

      return (
        <ProductItem 
          key={item.id} 
          price={item.price}
          title={item.title}
          img={item.image}
          id={item.id}/>
      )
    });

    return result;
  }


  return (
      <div className={styles.list__wrapper}>
        <div className={styles.product__list}>
          {loading ? <Spinner/> : error ? <ErrorFetch/> : renderProducts()}
        </div>
        <div className={styles.btn__block}>
          {loading ? null : error ? null : <Button value={'Загрузить еще'}/>}
        </div>
      </div>
  )
}

export default ProductList;