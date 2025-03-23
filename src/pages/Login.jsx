import React from 'react'

const Login = () => {
  return (
    <div 
    style= 
    {{ 
        border : "1px solid black" ,
        padding : "25px" , 
        borderRadius : "20px" , 
        position: 'absolute',
        top: '50%', // Center vertically
        left: '50%', // Center horizontally
        transform: 'translate(-50%, -50%)', 
        fontFamily: '"Concert One", sans-serif',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',

                
    }}>
    <form>
  <div class="mb-3" >
    <label for="exampleInputEmail1" class="form-label" style ={{fontSize : "20px",fontWeight : "bold"}}>Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label" style ={{fontSize : "20px",fontWeight : "bold"}}>Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" />
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary" style ={{fontSize : "20px",fontWeight : "bold"}}>Submit</button>
</form>
      
    </div>
  )
}

export default Login
