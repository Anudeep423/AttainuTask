import React from "react";
import {data} from "./data"

const Dashboard = () => {
    
    console.log(data);
    return(
        <>
        <h1> Token :  </h1>
        { JSON.stringify( localStorage.getItem("jwt") ) }
<h1>Cities </h1>
{  data.map( (data,i) => {
    return <>
    <h1> Id : {data.id} </h1>
    <h1> City : {data.name}  </h1>
    <h1> state : {data.state}  </h1>
    <br></br>
    <br></br>

    </>
}  )  }
</>

    )
}

export default Dashboard