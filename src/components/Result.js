import React, { useContext } from 'react';
import { ScoreContext } from './Exam';

const Result = () => {
 const score = useContext(ScoreContext)
 console.log(score)

    return (
        <div>
           You scored {score} %
        </div>
    )
}

export default Result;
