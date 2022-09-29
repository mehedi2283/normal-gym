import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import Workout from './../Workout/Workout';
import './Gym.css'

const Gym = () => {

    const [workouts,setWorkouts] = useState([]);
    // const [cart,setCart] = useState([]);
   
    

    useEffect( () => {
            fetch('gym-data.json')
            .then(res => res.json())
            .then(data => setWorkouts(data))
            
    },[])
    return (
        <div className='gym'>
            <div className='workout-container'>
            <h1>Normal Gym</h1>
            <h3>Todays's workout</h3>
               
               <div className='workout-cards'>
               { 
               workouts.map(workout => <Workout
                // handleAddToCart = {handleAddToCart}
               key = {workout._id}
               workout = {workout}
               ></Workout>)
                }
               </div>
                
            </div>

            <div className='details-container'>
               <Details ></Details>
            </div>
        </div>
    );
};

export default Gym;