import { useState } from 'react'
import Details from './Details'

export default function First(){
    const [isVisible, setIsVisible] = useState(true);

    function buttonClick() {
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
                placeholder="Answer" />

            <button className="next" onClick={() => {console.log({name})}}>Next</button>
        </div>
    )
}