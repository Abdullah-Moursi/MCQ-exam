import React, { useContext } from 'react';
import { ExamContext } from '../App';

const Exam = () => {
    const questions = useContext(ExamContext)
    return (
        <div>
            {questions}
        </div>
    )
}

export default Exam;
