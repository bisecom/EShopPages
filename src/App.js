import React from 'react';
import Cart from './containers/Cart';
import {ContactsContainer} from "./containers/Contacts";
import {BrowserRouter, Route} from "react-router-dom";
import FirstPage from "./components/FirstPage/FirstPage";

const App = () => {
  return (
      <BrowserRouter>
        <FirstPage/>
        <Route path="/cart" component={Cart}/>
        <Route path="/shipping" component={ContactsContainer}/>
      </BrowserRouter>
  );
}

export default App;
