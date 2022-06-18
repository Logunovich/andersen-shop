import styles from './header.module.css';

import Button from '../button';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.menu__block}>
        <div className={styles.header__title}>
          <a href="https://lkjlkj.ru">Andersen-shop</a> 
        </div>
        <nav>
          <a href="https://234234lkj.ru">О магазине</a>
        </nav>
      </div>
      <Button
        value={'Войти'}/>
    </div>
  )
}

export default Header;