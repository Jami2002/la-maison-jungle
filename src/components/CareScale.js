import sun from '../assets/sun.svg'
import water from '../assets/water.svg'

function CareScale({scaleValue, careType} ){

    const quality={
        1:'peu',
        2:'moderement',
        3:'beaucoup'
    }
    const range = [1,2,3]
    const scaleType = 
        careType === 'light' ? (<img src={sun} alt='sun-icon' />) : (<img src={water} alt='water-icon' />)

    function handleClick(){
        alert(`cette plante requiert ${quality[scaleValue]} ${careType === "water" ? "d'arrosage" : "de lumiere"}`  )
    }
        
    
    return (
        <div onClick={handleClick}>
            {range.map((rangElem) => scaleValue >= rangElem ? <span key={rangElem.toString()}>{scaleType}</span> : null)}
        </div>
    )
}

export default CareScale