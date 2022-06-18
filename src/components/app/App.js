import { useState } from "react";
import Header from "../header";
import ProductList from "../productList";

import styles from './app.module.css';

const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  
  const toggleLogin = (e) => {
    e.preventDefault();

    setIsLogged((isLogged) => {
      return !isLogged
    })
  }

  return (
    <div className={styles.app}>
      <Header 
        isLogged={isLogged}
        toggleLogin={toggleLogin}/>
      <ProductList/>
    </div>
  )
}

export default App;