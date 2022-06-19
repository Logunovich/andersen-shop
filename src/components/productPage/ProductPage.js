import styles from './productPage.module.css';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import StoreService from '../../services/StoreService';
import Spinner from '../spinner/Spinner';
import ErrorFetch from '../errorFetch';
import Button from '../button';
import Galery from '../galery';

const ProductPage = ({isLogged}) => {
  const storeService = new StoreService();
  
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false)
  const id = useParams().productId;
  const isLoggedInfo = (
    <div className={styles.info__block}>
      Для добавления товара в корзину авторизуйтесь
    </div>
  )

  useEffect(() => {
    onRequest();
  }, []);

  const onRequest = () => {
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
    const { title, images, description, price, category } = product;
    return (
      <div className={styles.product__block}>
        <div className={styles.product__img}>
          {/* <img src={images[0]} alt={title} /> */}
          <Galery images={images} alt={title}/>
        </div>
        <div className={styles.product__info}>
          <div className={styles.product__title}>
            <h1>{title}</h1>
          </div>
          <div className={styles.product__category}>
          {`Категория: ${category.name}`}
        </div>
          <div className={styles.product__text}>
            <p>{description}</p>
          </div>
          <div className={styles.product__price}>
            {`$${price}`}
          </div>
          {isLogged ? <Button 
            value={'В корзину'}
            /> 
            : isLoggedInfo}
        </div>
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