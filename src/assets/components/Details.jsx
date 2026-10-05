export default function Details() {
    return(
        <>
        
                <div id="details">
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
                </div>

        </>
    )
}