import NavBar from './components/NavBar'
import { Outlet } from "react-router-dom"
import { useState } from 'react'
import ShopContext from './contexts/ShopContext'
import './App.css'

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
      setCartItems([...cartItems, {...product, key:crypto.randomUUID()}]);
  }

  
  return (
    <>
      <ShopContext.Provider value={{cartItems, addToCart}}>
        <NavBar />
        <div className="app-body">
          <Outlet />
        </div>
      </ShopContext.Provider>
    </>
  )
}

export default App
