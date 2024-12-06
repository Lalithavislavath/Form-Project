import { useState } from "react";
import "./Error.css"
function FormError() {
  const [email, setEmail] = useState(' ')
  const [password, setPassword] = useState(' ')
  const [error, setError] = useState(' ')
  
 
 
  const handleemail=(e)=>{
    setEmail(e.target.value)
  }
  const handlepassword =(e)=>{
    setPassword(e.target.value)
  }
 
  const handlesubmit = (e) => {
    e.preventDefault()
    const error = {email: ' ', password: ' ' }
  
    setError(error);
   }
   
   
     
 
  return (
    <div>
      <form className="error" >
      <h1>FORM</h1>
      <label style={{fontSize:"20px"}}>EMAIL:</label>
       <input className="email" type="email"  value={email}   onChange={handleemail}/>
       <p style={{ color: "red", margin: "auto",padding:"10px"}}>{error.email}</p>
 
         <br></br><br></br>
 
       <label style={{fontSize:"20px"}}>PASSWORD:</label>
       <input className="pwd" type="password"   value={password}  onChange={handlepassword}/>
       <p style={{ color: "red", margin: "auto",padding:"10px"}}>{error.password}</p>
        <button  onClick={handlesubmit}>Submit</button>
      </form>
    </div>
  )
}
 
export default FormError;