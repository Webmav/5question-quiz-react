export default function Fifth() {
    return(
        <>
                <div id="fifth" className="hidden">
                    <div id="qFiveDiv">
                        <div className="qFive">
                            <h3>How many days are in a leap year?</h3>
                        </div>
                        <div className="qFive">
                            <input type="text" className="qFive" id="qLeap"
                                placeholder="Answer" />
                        </div>
                        <div className="qFive">
                            <button className="next">Next</button>
                        </div>
                    </div>
                </div>
        </>
    )
}