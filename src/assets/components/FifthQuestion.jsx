import { useState } from 'react'

export default function fifth() {
    const [isVisible, setIsVisible] = useState(true);
    const [fifth, setFifth] = useState('');
    
    function buttonClick() {
        //alert(`Your answer is "${fifth}"`)
        setIsVisible(false);
    }
    
    if(!isVisible) {
        return null;
    }
    
    return(
            <div className="fifth-wrapper">
                <h3>How many days are in a leap year?</h3>
        
                <input 
                    type="text" 
                    className="qOne" 
                    id="qCapital" 
                    placeholder="Answer"
                    onChange={(event) => {setFifth(event.target.value)}} />
        
                <button 
                    className="next"
                    onClick={buttonClick}
                    >Next</button>
            </div>
    )
}