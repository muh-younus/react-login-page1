import React, {useState} from 'react';

function Login(){

  const [color, setColor] = useState("Sign Up");


  return(
    <>
    <div className="parent">
    <div className="main">

      <div className='container'>
        
          <h1 className="text">{color}</h1>
        <div className="line"></div>  
          
      </div>
        <div className="inputs">

          {color==="login"?<div></div>: 
          <div className="inner-box">

            <i class="fa-solid fa-user icon"></i>
            <input type="text" placeholder="Name"></input>


          </div>}
         
          
          <div className="inner-box">

            <i class="fa-solid fa-envelope icon"></i>
            <input type="email" placeholder="Email"></input>
          
          </div>
          
          <div className="inner-box">

            <i class="fa-solid fa-envelope icon"></i>
            <input type="password" placeholder="Password"></input>
          
          </div>

          
          
    </div>

      <div className="btn-section">

        {color === "Sign Up"? <div></div>:<p className="paragraph">Lost Password? <a>Click Here</a></p>}

        

        <div className="btn">

          <button className={color === "Sign Up"?"gray": "login-btn"} onClick={()=>{
            setColor("login")
          }}>Login</button>
          
          <button className={color === "login"? "gray":"login-btn"} onClick={
            () =>{

              setColor("Sign Up")
            }
          }>Sign Up</button>
        
        </div>
      </div>
      

    </div>

      </div>
    </>
  )
}

export default Login;