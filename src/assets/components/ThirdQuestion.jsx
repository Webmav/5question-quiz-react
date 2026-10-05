import { useState } from 'react'

export default function Third() {
    const [isVisible, setIsVisible] = useState(true);
    const [third, setThird] = useState('');
    
    function buttonClick() {
        //alert(`Your answer is "${third}"`)
        setIsVisible(false);
    }
    
    if(!isVisible) {
        return null;
    }
    
    return(
            <div className="third-wrapper">
                <h3>What is the capital city of France?</h3>
        
                <input 
                    type="text" 
                    className="qOne" 
                    id="qCapital" 
                    placeholder="Answer"
                    onChange={(event) => {setThird(event.target.value)}} />
        
                <button 
                    className="next"
                    onClick={buttonClick}
                    >Next</button>
            </div>
    )
}
