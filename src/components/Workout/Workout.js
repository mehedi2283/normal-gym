import React from 'react';
import './Workout.css'

const Workout = ({handleAddToList,workout}) => {
    
    const {name,img,time,age} = workout
    return (
        <div className='workout'>
           
            
            <img src={img} alt="" />
            
            <div className='workout-info'>
                <h3 className='workout-name'>{name}</h3>
                <br />
                <br />
                
                <p className='age'>Age : <strong>{age}</strong></p>
               
                <p className='time'>Time required: <strong> {time}s</strong></p>
               
            </div>
            <button onClick={()=> handleAddToList(workout)} className='btn-add'> 
                Add to List
            </button>
            
        </div>
    );
};

export default Workout;