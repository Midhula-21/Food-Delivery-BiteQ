import React from 'react'

const Register = () => {
  return (
    <div
    style= 
    {{ 
        border : "1px solid black" ,
        padding : "25px" , 
        borderRadius : "20px" , 
        position: 'absolute',
        top: '60%', // Center vertically
        left: '50%', // Center horizontally
        transform: 'translate(-50%, -50%)', 
        fontFamily: '"Concert One", sans-serif',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        width : "800px",
          
    }}
    >
<form>
  <div class="mb-3">
    <label for="exampleInputUsername" class="form-label" style ={{fontSize : "20px",fontWeight : "bold"}}>Full Name</label>
    <input type="text" class="form-control" id="exampleInputUsername" />
  </div>          

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label" style ={{fontSize : "20px",fontWeight : "bold"}}>Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>

  <div class="mb-3">
    <label for="exampleInputPhone" class="form-label" style ={{fontSize : "20px",fontWeight : "bold"}}>Phone Number</label>
    <input type="tel" class="form-control" id="exampleInputPhone" />
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label" style ={{fontSize : "20px",fontWeight : "bold"}}>Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" />
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword2" class="form-label" style ={{fontSize : "20px",fontWeight : "bold"}}>Confirm Password</label>
    <input type="password" class="form-control" id="exampleInputPassword2" />
  </div>

  <div className="mb-3">
        <label className="form-label" style ={{fontSize : "20px",fontWeight : "bold"}}>Address</label>
        <input type="text" className="form-control" placeholder="Street Address" required />
        <input type="text" className="form-control mt-2" placeholder="City" required />
        <input type="text" className="form-control mt-2" placeholder="State" required />
        <input type="text" className="form-control mt-2" placeholder="Zip Code" required />
  </div>
  <button type="submit" class="btn btn-primary" style ={{fontSize : "20px",fontWeight : "bold"}}>Register</button>
</form>
      
    </div>
  )
}

export default Register
