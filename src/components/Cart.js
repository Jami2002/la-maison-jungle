import { useState, useEffect } from "react";
import "../styles/cart.css"
function Cart({cart, updatedcart}){
    const [isOpen, setIsOpen] = useState(false)
    const total = cart.reduce(
      (acc, plantType) => acc + plantType.amount * plantType.price, 0
    )

    useEffect(() => {
     document.title = `LMJ: ${total}$ d'achats`
    }, [total])
    
    return isOpen?(
       <div className="cart">
          <button  className='toggle-button'
          onClick={() => setIsOpen(false)}
          >
             fermer

          </button>

          {cart.length > 0 ? (
            <div>
                 <h2>Panier</h2>
                 
              ({cart.map(({name,price,amount}, index) => (
                          <div key={`${name}-${index}`}>
                             {name} {price}$ * {amount}
                          </div>
                       ))} 
          
                  <h3>Total : {total}$</h3>)

                  <button className="add-button" onClick={() => updatedcart([])}>Vider le panier</button>

            </div>) : ( <div>Votre panier est vide</div>)
          }
            </div>
          
          ) : (
         <div className="closed">
             <button className='toggle-button' onClick={() => setIsOpen(true)}>
               ouvrir le panier
             </button>
         </div>
       )
 }
 export default Cart