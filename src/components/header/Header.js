import styles from './header.module.css';
import { Link } from 'react-router-dom';

import Button from '../button';

const Header = ({isLogged, toggleLogin}) => {
  const cartBlock = (
    <div className={styles.cart__block}>
    <div className={styles.count__products}>
      Товаров в корзине: <span className={styles.product__cart}>0000</span>
    </div>
    <div className={styles.count__price}>
      На сумму: <span className={styles.price__cart}>$0</span>
    </div>
  </div>

  )
  return (
    <div className={styles.header}>
      <div className={styles.menu__block}>
        <div className={styles.header__title}>
          <Link to="/">Andersen-shop</Link> 
        </div>
        <nav>
          <Link to="/about">О магазине</Link>
        </nav>
      </div>
      {isLogged ? cartBlock : null}
      <Button
        value={isLogged ? 'Выйти' : 'Войти'}
        handle={toggleLogin}/>
    </div>
  )
}

export default Header;