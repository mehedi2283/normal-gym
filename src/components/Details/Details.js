import React from 'react';
import './Details.css'
import { useState, useEffect } from 'react';
import { addToDb, getTime } from '../../utilities/localdb';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

    
    const Details = ({ timeRequired }) => {
    const notify = () => toast.success(' Completed all exercise.', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        

        

        });
        

    let totalTimeRequired = 0;
    for (const time of timeRequired) {
        totalTimeRequired = totalTimeRequired + time;
    }
    // console.log(totalTimeRequired);


    const [breakTime, setBreakTime] = useState(0)



    const handleBreakBtn = (id) => {

        const breakTimes = document.getElementById(id);
        const breakSecond = breakTimes.innerText;

        setBreakTime(breakSecond);
        addToDb(id)



    }

    useEffect(() => {
        const storedTime = getTime();
        document.getElementById('set-breakTime').innerText = storedTime;


    },
        [breakTime]

    )
    return (
        <div className='details'>

            <div className="user">
                <img src='user-img.jpg' alt="" />
                <div>
                    <h3 className='user-name'>Mehedi Hasan</h3>
                    <p className='user-location'><span>Dhaka,Bangladesh</span></p>
                </div>
            </div>
            <div className='user-info'>
                <div>
                    <p><strong>75</strong><small className='kg'>kg</small></p>
                    <p className='user-location'>Weight</p>
                </div>
                <div>
                    <p><strong>6.5</strong></p>
                    <p className='user-location'>Height</p>
                </div>
                <div>
                    <p><strong>25</strong> <small className='yrs'>yrs</small></p>
                    <p className='user-location'>Age</p>
                </div>
            </div>
            <br />
            <br />
            <br />
            <div>
                <h3>Add A Break</h3>
            </div>
            <div className='user-info'>
                <div>
                    <button onClick={() => handleBreakBtn(10)} className='brk-btn'><span id='10'>10</span>s</button>
                </div>
                <div>
                    <button onClick={() => handleBreakBtn(20)} className='brk-btn'><span id='20'>20</span>s</button>
                </div>
                <div>
                    <button onClick={() => handleBreakBtn(30)} className='brk-btn'><span id='30'>30</span>s</button>
                </div>
                <div>
                    <button onClick={() => handleBreakBtn(40)} className='brk-btn'><span id='40'>40</span>s</button>
                </div>
                <div>
                    <button onClick={() => handleBreakBtn(50)} className='brk-btn'><span id='50'>50</span>s</button>
                </div>
            </div>
            <div>
                <br />
                <br />
                <br />
                <h3>Exercise Details</h3>
            </div>
            <div className='user-info'>
                <div>
                    <h4>Exercise-Time</h4>
                </div>
                <div>
                    <p><strong id='exercise-time'>{totalTimeRequired}</strong> seconds</p>
                </div>

            </div>
            <div className='user-info'>
                <div>
                    <h4>Break-Time</h4>
                </div>
                <div>
                    <p><strong id='set-breakTime'>{breakTime}</strong> seconds</p>
                </div>

            </div>


            <div>
                <button className='complete-btn' onClick={notify}>Activity Completed</button>
                <ToastContainer position="top-center"
                    autoClose={200}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover />
            </div>


        </div>
    );
};

export default Details;