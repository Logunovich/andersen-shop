import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../header";
import ProductList from "../productList";
import About from "../about";
import LogModal from "../logModal";
import ProductPage from "../productPage";
import Page404 from "../Page404";

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
    <Router>
      <div className={styles.app}>
        <Header 
          isLogged={isLogged}
          toggleLogin={toggleLogin}/>
        <Switch>
          <Route exact path="/">
            <ProductList
              isLogged={isLogged}/>
          </Route>
          <Route exact path="/products/:productId">
            <ProductPage
              isLogged={isLogged}/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="*">
            <Page404/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;