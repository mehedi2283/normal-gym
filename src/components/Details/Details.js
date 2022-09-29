import React from 'react';
import './Details.css'


const Details = () => {
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
            <div>
                <h3>Add A Break</h3>
            </div>
            <div className='user-info'>
                <div>
                    <button className='brk-btn'>10s</button>
                </div>
                <div>
                    <button className='brk-btn'>20s</button>
                </div>
                <div>
                    <button className='brk-btn'>30s</button>
                </div>
                <div>
                    <button className='brk-btn'>40s</button>
                </div>
                <div>
                    <button className='brk-btn'>50s</button>
                </div>
            </div>
            <div>
                <h3>Exercise Details</h3>
            </div>
            <div className='user-info'>
                <div>
                    <h4>Exercise-Time</h4>
                </div>
                <div>
                    <p><span>0</span>seconds</p>
                </div>
                
            </div>
            <div className='user-info'>
                <div>
                    <h4>Break-Time</h4>
                </div>
                <div>
                    <p><span>0</span>seconds</p>
                </div>
                
            </div>

            <button className='complete-btn'>Activity Completed</button>


        </div>
    );
};

export default Details;