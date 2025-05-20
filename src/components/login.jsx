import React, {useState} from 'react';

function Login(){


  return(
    <>
    <div className="parent">
    <div className="main">

      <div className='container'>
        
          <h1 className="text">Sign Up</h1>
        <div className="line"></div>  
          
      </div>
        <div className="input">
          
          <div className="inner-box">
           
            <i class="fa-solid fa-user icon"></i>
            <input type="text" placeholder="Name"></input>
              
          
          </div>
          
          <div className="inner-box">

            <i class="fa-solid fa-envelope icon"></i>
            <input type="text" placeholder="Email"></input>
          
          </div>
          
          <div className="inner-box">

            <i class="fa-solid fa-envelope icon"></i>
            <input type="text" placeholder="Password"></input>
          
          </div>
          
    </div>

    </div>

      </div>
    </>
  )
}

export default Login;