import { useState } from 'react'

export default function Score() {
    const [score, setScore] = useState(0)

    return(
        <div className="score-wrapper">
            <h2>Your score is : </h2>

            <p>{score}</p>
        </div>
    )
}

