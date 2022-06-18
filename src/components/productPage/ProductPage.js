import styles from './productPage.module.css';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import StoreService from '../../services/StoreService';
import Spinner from '../spinner/Spinner';
import ErrorFetch from '../errorFetch';

const ProductPage = () => {
  const storeService = new StoreService();
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false)
  const id = useParams().productId;

  useEffect(() => {
    onRequest();
  }, []);

  const onRequest = (offset, e) => {
    e?.preventDefault();

    storeService.getProduct(id)
      .then(productLoaded)
      .catch(() => {
        setLoading(false);
        setError(true);
      })
  }

  const productLoaded = (product) => {
    setProduct(product);
    setLoading(false);
  }

  const renderProduct = () => {
    return (
      <div>
        Id: {product.id}
        Name: {product.title}
      </div>
    )
  }


  return (
    <div className={styles.product__page}>
      {loading ? <Spinner/> : error ? <ErrorFetch/> : renderProduct()}
    </div>
  )  
}

export default ProductPage;