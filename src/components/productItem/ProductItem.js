import styles from './productItem.module.css';

import Button from '../button';

const ProductItem = ({img, title, price, id}) => {
  return (
    <div className={styles.product__item}>
      <div className={styles.product__img}>
        <img src={img} alt={title} />
      </div>
      <div className={styles.product__title}>
        <a href={id}>{title}</a>
      </div>
      <div className={styles.product__price}>
        ${price}
      </div>
      <Button value={'В корзину'}/>
    </div>
  )
}

export default ProductItem;