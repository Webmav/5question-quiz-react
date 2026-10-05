import { useState } from 'react'
import Details from './Details'

export default function First(){
    const [isVisible, setIsVisible] = useState(true);
    const [first, setFirst] = useState('');

    function buttonClick() {
        //alert(`Your answer is "${first}"`)
        setIsVisible(false);
    }

    if(!isVisible) {
        return null;
    }

    return(
        <div className="first-wrapper">
            <h3>What is the capital of India?</h3>

            <input 
                type="text" 
                className="qOne" 
                id="qCapital" 
                placeholder="Answer"
                onChange={(event) => {setFirst(event.target.value)}} />

            <button 
                className="next"
                onClick={buttonClick}
                >Next</button>
        </div>
    )
}