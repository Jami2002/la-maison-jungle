import CareScale from "./CareScale";
import "../styles/PLantItem.css"


function PLantItem({name,cover,id,light,water,isBestSAle,isSpecialOffer} ){

    
    return (
        <li key={id} className='plant-item'>
             
            <img className="plant-item-cover" src={cover} alt={`${name} cover`} />
            <span className="name">{name}
            {isBestSAle}</span>
            {isSpecialOffer}
            <div>
                <CareScale scaleValue={light} careType='light' />
                <CareScale scaleValue={water} careType='water' />
            </div>
        </li>
    )
}

export default PLantItem