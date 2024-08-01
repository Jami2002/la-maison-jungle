import { useEffect, useState } from 'react'
import '../styles/footer.css'

function Footer({cart}) {
	const [inputValue, setInputValue] = useState('')

	useEffect(() => {
		return () => console.log('bonjour')
	})
   
	function handleblur(){
        if(!inputValue?.includes("@")){
			alert("votre email n'est pas correct")
		}
		else{
			alert("votre email est correct")
		}
	}
	function handleInput(value){
        setInputValue(value.target.inputValue)
	}

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné(e)s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :
			</div>
            <input
			  placeholder='Entrer votre email' onBlur={handleblur} onChange={handleInput}
			  value={inputValue}
			/>
		</footer>
	)
}

export default Footer