import { useState } from 'react'
import '../../index.css'

export default function Details() {
    const [name, setName] = useState('');
    const [gmail, setGmail] = useState('');

    return(
        <>


            <div className='details-wrapper'>
                <h3>Your Details : </h3>

                <input 
                    type="text" 
                    placeholder='Name' 
                    onChange={(event) => {setName(event.target.value)}} 
                /><br />

                <input 
                    type="text"
                    placeholder='Gmail' 
                    onChange={(event) => {setGmail(event.target.value)}}    
                /><br />

                <button onClick={() =>{alert(`Your gmail: ${gmail}, name: ${name} `)}}>Start</button>
            </div>

            {/* <div id="details" className=''>
                <div id="nGSubmitDiv">
                    <h3 align="center">Your Details : </h3>
                    <div className="nGSubmit">
                        <input type="text" className="nGSubmit" id="nGSubmitName"
                            placeholder="Name" /><br /><br />
                    </div>
                    <div className="nGSubmit">
                        <input type="text" className="nGSubmit"  id="nGSubmitGmail"
                            placeholder="Gmail" /><br /><br />
                    </div>
                    <div className="nGSubmit"> 
                        <button id="startButton">Start</button>
                    </div>
                </div>
            </div> */}
        </>
    );
}