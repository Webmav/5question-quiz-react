import { useState } from 'react'

export default function Fourth() {
    const [isVisible, setIsVisible] = useState(true);
    const [fourth, setFourth] = useState('');
    
    function buttonClick() {
        //alert(`Your answer is "${fourth}"`)
        setIsVisible(false);
    }
    
    if(!isVisible) {
        return null;
    }
    
    return(
            <div className="fourth-wrapper">
                <h3>What color are emeralds?</h3>
        
                <input 
                    type="text" 
                    className="qOne" 
                    id="qCapital" 
                    placeholder="Answer"
                    onChange={(event) => {setFourth(event.target.value)}} />
        
                <button 
                    className="next"
                    onClick={buttonClick}
                    >Next</button>
            </div>
    )
}