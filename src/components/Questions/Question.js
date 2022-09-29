import React from 'react';
import './Question.css'

const Question = () => {
    return (
        
        
       <div className='questions-container'>

        <h1>----- Questions -----</h1>
         <div className='question-card'>
            <h3>Q1. How does react work ?</h3>
            <p>Ans. Create a new React project by using the command below: ... How does it work: While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents.</p>
        </div>
         <div className='question-card'>
            <h3>Q2. What is the difference between state and props in React ?</h3>
            <p>Ans. Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</p>
        </div>
         <div className='question-card'>
            <h3>Q3. What does useEffect do ?</h3>
            <p>Ans. By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.</p>
        </div>
       </div>
    );
};

export default Question;