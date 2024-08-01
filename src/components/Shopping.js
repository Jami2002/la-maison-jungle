import { plantList } from "../datas/plantList"
import "../styles/shoppingList.css"
import PLantItem from "./PlantItem"
import Categories from "./Categories"
import { useState } from "react"

function ShoppingList({cart, updatedcart}) {
    const [activeCategory,setActivecategory] = useState('')
    const categories = plantList.reduce(
        (acc,plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category),[]
      )
 
    function addTocart(name, price){
        const currenplantadded = cart.find((plant) => (plant.name === name))
        if(currenplantadded){
            const cartFilterredcurrentplant = cart.filter(
            (plant) => plant.name !== name)
        
            updatedcart([
            ...cartFilterredcurrentplant,{name,price,amount: currenplantadded.amount + 1}
            ])
        }else{
           updatedcart([...cart, {name,price, amount: 1}])
        }
        
    }
    return (
        <div className="shopping">
           
            <Categories 
                 categories={categories}
                 setActivecategory={setActivecategory}
                 activeCategory={activeCategory}
            />

            <ul className="plant-list">
                {plantList.map(({name,id,cover,light,water,price,category}) => !activeCategory || activeCategory === category ?  (
                    <div key={id}>
                        <PLantItem 
                          name={name}
                          cover={cover}
                          light={light}
                          water={water}
                          price={price}
                        />
                        <button className="add-button1" onClick={() => addTocart(name,price)}>Ajouter</button>
                    </div>
       
                ) : null
                )}
            </ul>
        </div>
       
    )
}

export default ShoppingList