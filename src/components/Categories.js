import { plantList } from "../datas/plantList"
import PLantItem from "./PlantItem"

function Categories({categories,activeCategory,setActivecategory}){
   
   
    
    return(
         <div className="categories">
             
                  <select value={activeCategory}
                  onChange={(e) => setActivecategory(e.target.value) }
                  className="categorie-select"
                  >
                        
                        <option value="">Vide</option>
        
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>
                                {cat}
                            </option>
                        ))}
                  </select>
           
                  <button onClick={() => setActivecategory('')}>Reinitialiser</button>
         </div>
    )
}

export default Categories