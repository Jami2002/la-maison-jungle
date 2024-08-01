import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Bannerr from "./components/Bannerr";
import logo from "./assets/logo.png"
import ShoppingList from "./components/Shopping";
import QuestionForm from "./components/QuestionForm";
import './styles/layout.css'
import { useState, useEffect } from "react";


const App = () => {

  const savedCart = localStorage.getItem('cart')
	const [cart, updatedcart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

const [isfooterShown, updateIsFooterShown]
= useState(true)	
// useEffect(() => {
//   document.title = `React App`
// })
  return (
    <div>
      <Bannerr>
        <img src={logo} alt='La maison jungle' className='logo'/>
        <h1 className='title'>La maison jungle</h1>
      </Bannerr>

      <div className="container"> 
        <Cart  cart = {cart} updatedcart={updatedcart} />
        <ShoppingList  cart = {cart} updatedcart={updatedcart} /> 
      </div>

      <button onClick={()=> updateIsFooterShown(!isfooterShown)} >Cacher!</button> 
      {isfooterShown && <Footer  cart={cart}/>}
      
    </div>
  )
}

export default App;

