import { useState } from 'react'

export default function Second() {
    const [isVisible, setIsVisible] = useState(true);
    const [second, setSecond] = useState('');
    
    function buttonClick() {
        //alert(`Your answer is "${second}"`)
        setIsVisible(false);
    }
    
    if(!isVisible) {
        return null;
    }

    return(
            <div className="second-wrapper">
                <h3>What is the largest planet in our solar system?</h3>
        
                <input 
                    type="text" 
                    className="qOne" 
                    id="qCapital" 
                    placeholder="Answer"
                    onChange={(event) => {setSecond(event.target.value)}} />
        
                <button 
                    className="next"
                    onClick={buttonClick}
                    >Next</button>
            </div>
    )
}
