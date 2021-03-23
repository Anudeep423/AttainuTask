import React,{useState} from "react";
import {signup} from "./helper/userApiCalls"
import {Route,Link} from "react-router-dom"

const Register =  () => {

  const [values,setValues] = useState({ userName : "" , password : "" ,success : false  })

  const {userName,password,success} = values

  const handleChange = (e) => {
      setValues({...values, [e.target.name] : e.target.value })
  }

  const onSubmit = (event) => {
    if(!userName || !password){
      alert("Enter all details")
      return ""
    }
    signup({userName,password})
      .then(data => {
        setValues({...values, userName : "" , password : "" , success : true  })
        console.log(data)
      })
      .catch(console.log("Error in signup"));
  }
  return (
   <>
 <h1>Register Page </h1>
 <h1>UserName :  </h1>
 <input name = "userName"  placeholder="Enter user Name"  onChange = {handleChange }  />
 <h1>Password :  </h1>
 <input  name = "password" placeholder="Enter password" type = "password" onChange = {handleChange } />
 <br></br>
 <br></br>
 <br></br>

 <button onClick = { () =>  {onSubmit()}}  >Submit</button>
 {JSON.stringify(values)}

<br></br>
{  success ? <h1> You have Successfully Registered  login here - <Link to = "/login" > <a>Login</a>  </Link> </h1> : ""}
   </>
  );
}

export default Register;
