import styles from './button.module.css';

const Button = ({value}) => {
  return (
    <div className={styles.cart__block}>
      <a href="https://dalfkj.ru">{value}</a>
    </div>
  )
}

export default Button;