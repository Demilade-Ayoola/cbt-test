import Home from './Home'
import React from 'react'
import {useState} from 'react'
function Questions() {
                
                        const questions = [
                        {
                            questionText: 'What is the capital of Australia?',
                            answerOptions: [
                                { answerText: 'New York', isCorrect: false },
                                { answerText: 'Canberra', isCorrect: true },
                                { answerText: 'Wellington', isCorrect: false },
                                { answerText: 'Pretoria', isCorrect: false },
                            ],
                        },
                        {
                            questionText: 'Who is the greek god of war?',
                            answerOptions: [
                                { answerText: 'Hermes', isCorrect: false },
                                { answerText: 'Ares', isCorrect: true },
                                { answerText: 'Artemis', isCorrect: false },
                                { answerText: 'Zeus', isCorrect: false },
                            ],
                        },
                        {
                            questionText: 'The 2008 Olympic games were hosted in what city?',
                            answerOptions: [
                                { answerText: 'Beijing', isCorrect: true },
                                { answerText: 'Moscow', isCorrect: false },
                                { answerText: ' Helsinki', isCorrect: false },
                                { answerText: 'Los Angeles', isCorrect: false },
                            ],
                        },
                        {
                            questionText: 'Which of these is not a mammal',
                            answerOptions: [
                                { answerText: 'Dog', isCorrect: false },
                                { answerText: 'Whale', isCorrect: false },
                                { answerText: 'Chimpazee', isCorrect: false },
                                { answerText: 'Snake', isCorrect: true },
                            ],
                        },
                    ];

                    const [currentQuestion, setCurrentQuestion] = useState(0);
                    const [showScore, setShowScore] = useState(false);
                    const [score, setScore] = useState(0);
const[retake, setRetake]= useState(true)                    
                        function handlePrev (){
            
                            setCurrentQuestion((prevQuestion) =>{
                    if(prevQuestion===0){
                    return 0;
                    }else{
                        return prevQuestion - 1;
                    }
                        });
                    };

                    function handleNext(){
                
                    const nextQuestion = currentQuestion + 1;
                    if(nextQuestion < questions.length){
                        setCurrentQuestion(nextQuestion);
                    }else{
                        return 4;
                    }
                    

                    }

                    function handleSubmit(){
                   setShowScore(true); }
function handleRetake(){
    setRetake(false)
}

                        const handleAnswerOptionClick = (isCorrect) => {
                            
    
                            if (isCorrect) {
                                setScore(score + 1);
                                                        }
                           
                            
                        };
        

    return (
          <div >
          {retake ? (
              <div className='ques'>
                {showScore ? (
                    <div className='score-section'>
                        You scored {score} out of {questions.length}
                    <button className='btn btn-primary my-2' onClick={handleRetake}>Retake Quiz</button> 
                    </div>
                ) : (
                    <>
                  
                        <div className='question-section'>
                            <div className='question-count'>
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className='question-text'>{questions[currentQuestion].questionText}</div>
                        </div>
                        <div className='answer-section'>
                            {questions[currentQuestion].answerOptions.map((answerOption) => (
                                <div className='mb-2'>
                        <button className={'btn mx-1 btn-light button my-1 '} onClick={() =>handleAnswerOptionClick(answerOption.isCorrect)}>
                        {answerOption.answerText}
                        </button>
                        
                                    {/* <input  type="radio"   name="options"   onChange={() => handleAnswerOptionClick(answerOption.isCorrect)}/>
                                    <label className="mx-1"  onChange={() => handleAnswerOptionClick(answerOption.isCorrect)} >{answerOption.answerText}</label>
                             */}
                            
                                    </div> ))}
                        </div>
                        
                        
                        <div className='buttonn'>
                            <button className='btn btn-outline-dark mx-2'  onClick={handlePrev}>Previous</button>
                            <button className='btn btn-outline-dark mx-2' onClick={handleSubmit} >Submit</button>
                            <button className='btn btn-outline-dark mx-2' onClick={handleNext}>Next</button>
                            </div> 
                  
                    </>
                )}
          </div>):(
              <Home/>
              
              )}

            </div>
                                    
                               )
}
                            
    export default Questions