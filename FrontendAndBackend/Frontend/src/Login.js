import React,{useState} from "react";
import {signin} from "./helper/userApiCalls"
import {Redirect} from "react-router-dom"

const Login =  () => {

  const [values,setValues] = useState({ userName : "" , password : "" ,error : "" ,success : false , token : ""})

  const {userName,password} = values

  const handleChange = (e) => {
      setValues({...values, [e.target.name] : e.target.value })
  }

  const onSubmit = (event) => {
    if(!userName || !password){
      alert("Enter all details")
      return ""
    }
    signin({userName,password})
      .then(data => {
        if(data.error){
            setValues({...values,error : data.error  })
            return ""
        }else{
          localStorage.setItem("jwt",data.token)
          setValues({...values, token : data.token , success : true})
            }
        
      })
      .catch(console.log("Error in signup"));
  }
  return (
   <>
 <h1>Login Page </h1>
 <h1>UserName :  </h1>
 <input name = "userName"  placeholder="Enter user Name"  onChange = {handleChange }  />
 <h1>Password :  </h1>
 <input  name = "password" placeholder="Enter password" type = "password" onChange = {handleChange } />
 <br></br>
 <br></br>
 <br></br>

 <button onClick = { () =>  {onSubmit()}}  >Submit</button>
 {values.error ? <h1> User Does not exist  </h1>   : "" }
 {values.success ?  <Redirect  to = "/dashboard"  /> : "" }
 {JSON.stringify(values)}

   </>
  );
}

export default Login;
