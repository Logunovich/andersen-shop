import styles from './button.module.css';

const Button = ({value, toggleLogin}) => {
  return (
    <div className={styles.cart__block}>
      <a href="#" onClick={toggleLogin}>{value}</a>
    </div>
  )
}

export default Button;