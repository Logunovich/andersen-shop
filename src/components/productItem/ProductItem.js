import styles from './productItem.module.css';
import { Link } from 'react-router-dom';

import Button from '../button';

const ProductItem = ({img, title, price, id, isLogged, amount}) => {
  const defaultImg = 'https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-1.jpg';
  const isLoggedInfo = (
    <div className={styles.info__block}>
      Для добавления товара в корзину авторизуйтесь
    </div>
  )
  const amountInfo = (
    <div className={styles.product__amount}>
      {`В наличии: ${amount} шт.`}
    </div>
  )
  return (
    <div className={styles.product__item}>
      <div className={styles.product__title}>
        <Link to={`/products/${id}`}>{title}</Link>
      </div>
      <div className={styles.product__img}>
        <img src={img || defaultImg} alt={title} />
      </div>
      <div className={styles.product__price}>
        ${price}
      </div>
      <div>
        {isLogged ? <Button 
        value={'В корзину'}
        /> 
        : isLoggedInfo}
      </div>
        {isLogged ? amountInfo : null}
    </div>
  )
}

export default ProductItem;