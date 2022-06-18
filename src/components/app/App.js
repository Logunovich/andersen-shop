import Header from "../header";
import ProductList from "../productList";

import styles from './app.module.css';

const App = () => {

  return (
    <div className={styles.app}>
      <Header/>
      <ProductList/>
    </div>
  )
}

export default App;