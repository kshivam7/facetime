import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Home.css';


function Home() {
    const [value,setValue] = useState('');
    const navigateTo = useNavigate();
    const handlejoin =  useCallback(()=>{
        navigateTo(`/room/${value}`);
    },[value, navigateTo]);
  return (
    <div className='home-container'>
        <div className='home-box'>
            <h1>Join a Room</h1>
            <input type='text' value={value} placeholder='Enter Your Room ID' onChange={(e)=>{setValue(e.target.value)}}/>
            <button className='join-btn' onClick={handlejoin}>Join</button>
        </div>
      
    </div>
  )
}

export default Home
