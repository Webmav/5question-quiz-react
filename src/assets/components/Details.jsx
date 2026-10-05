import { useState } from 'react'
import '../../index.css'

export default function Details() {
    const [isVisible, setIsVisible] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    if(!isVisible) {
        return null;
    }

    return(
            <div className='details-wrapper'>
                <h3>Your Details : </h3>

                <input 
                    type="text" 
                    placeholder='Name' 
                    onChange={(event) => {setName(event.target.value)}} 
                /><br />

                <input 
                    type="email"
                    placeholder='Email' 
                    onChange={(event) => {setEmail(event.target.value)}}    
                /><br />

                <button 
                    id='button'
                    onClick={buttonClick}>Start</button>
            </div>
    );

    function buttonClick() {
        // alert(`Your name is "${name}" and your email is "${email}"`)
        setIsVisible(false)
    };
}