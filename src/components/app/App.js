import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "../header";
import ProductList from "../productList";
import About from "../about";
import LogModal from "../logModal";
import ProductPage from "../productPage";
import Page404 from "../Page404";

import styles from './app.module.css';


const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [isModalLoginOpen, setIsModalLoginOpen] = useState(false);
  const [cart, setCart] = useState({amount: 0, sum: 0});

  const toggelOpenModal = () => {
    setIsModalLoginOpen((val) => {
      return !val
    })
  }
  
  const toggleLogin = (e) => {
    e?.preventDefault();

    setIsLogged((isLogged) => {
      return !isLogged
    })
  }

  return (
    <Router>
      <div className={styles.app}>
        <Header 
          isLogged={isLogged}
          toggelOpenModal={toggelOpenModal}
          toggleLogin={toggleLogin}
          cart={cart}/>
        <Routes>
          <Route path="/" element={<ProductList isLogged={isLogged} />} />
          <Route path="/products/:productId" element={<ProductPage isLogged={isLogged} />} />
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<Page404/>}/>
        </Routes>
        {isModalLoginOpen ? <LogModal 
                              toggelOpenModal={toggelOpenModal}
                              toggleLogin={toggleLogin}/> : 
                            null}
      </div>
    </Router>
  )
}

export default App;