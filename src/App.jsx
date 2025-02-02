import NavBar from './components/NavBar'
import { Outlet } from "react-router-dom"
import { useState } from 'react'
import ShopContext from './contexts/ShopContext'
import './App.css'

const App = () => {
  const [cartItems, setCartItems] = useState([]);


  const addToCart = (product) => {
    setCartItems([...cartItems, {...product, quantity: 1, key:crypto.randomUUID()}]);
  }

  const setQuantity = (key, quantity) => {
    const index = cartItems.findIndex((item) => item.key === key);
    const newCartItems = structuredClone(cartItems);
    newCartItems[index].quantity = quantity;
    setCartItems(newCartItems);
  }
  
  return (
    <>
      <ShopContext.Provider value={{cartItems, addToCart, setQuantity}}>
        <NavBar />
        <div className="app-body">
          <Outlet />
        </div>
      </ShopContext.Provider>
    </>
  )
}

export default App
