import styles from './productList.module.css';
import { useEffect, useState } from 'react';

import ProductItem from '../productItem';
import Button from '../button';
import StoreService from '../../services/StoreService';
import Spinner from '../spinner/Spinner';
import ErrorFetch from '../errorFetch/ErrorFetch';


const ProductList = ({isLogged}) => {
  const [loading, setLoading] = useState(true);
  const [newProductsLogain, setNewProductsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [productsEnded, setProductsEnded] = useState(false);
  
  const storeService = new StoreService();

  useEffect(() => {
    onRequest();
  }, []);

  const onRequest = (offset, e) => {
    e?.preventDefault();

    onProductsLoading();

    storeService.getAllProducts(offset)
      .then(productsLoaded)
      .catch(() => {
        setLoading(false);
        setError(true);
      })
  }

  const onProductsLoading = () => {
    setNewProductsLoading(true)
  }

  const productsLoaded = (products) => {
    if (products.length < 12) {
      setProductsEnded(true)
    }
    
    const newProducts = products.map((item) => {
      return {...item, amount: 10}
    });

    setProducts(oldProducts => {
      return [...oldProducts, ...newProducts];
    });

    setLoading(false);
    setNewProductsLoading(false);

    setOffset(offset => {
      return offset += 12;
    })
  }

  const renderProducts = () => {
    const result = products.map((item) => {
    
      return (
        <ProductItem 
          isLogged={isLogged}
          key={item.id} 
          price={item.price}
          title={item.title}
          img={item.images[0]}
          id={item.id}
          amount={item.amount}
        />
      )
    });

    return result;
  }

  return (
      <div className={styles.list__wrapper}>
        <div className={styles.product__list}>
          {loading ? <Spinner/> : 
          error ? <ErrorFetch/> : 
          renderProducts()}
        </div>
        <div className={styles.btn__block}>
          {loading ? null : 
          error ? null : 
          productsEnded ? null :
          <Button 
            value={'Загрузить еще'}
            handle={(e) => onRequest(offset, e)}
            isDisabled={newProductsLogain}
          />}
        </div>
      </div>
    )
}

export default ProductList;