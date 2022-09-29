import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import Workout from './../Workout/Workout';
import './Gym.css'

const Gym = () => {

    const [workouts,setWorkouts] = useState([]);
    const [timeRequired,setTimeRequired] = useState([]);
    // console.log(timeRequired);
    

    useEffect( () => {
            fetch('gym-data.json')
            .then(res => res.json())
            .then(data => setWorkouts(data))
            
    },[])

    const handleAddToList = (workout) =>{
        const newTimeRequired = [...timeRequired,workout.time];
        setTimeRequired(newTimeRequired);

        


    }
    return (
        <div className='gym'>
            <div className='workout-container'>
            <h1 className='gym-name'>Normal Gym</h1>
            <h3>Todays's workout</h3>
               
               <div className='workout-cards'>
               { 
               workouts.map(workout => <Workout
                handleAddToList = {handleAddToList}
               key = {workout._id}
               workout = {workout}
               ></Workout>)
                }
               </div>
                
            </div>

            <div className='details-container'>
               <Details timeRequired = {timeRequired}></Details>
            </div>
        </div>
    );
};

export default Gym;