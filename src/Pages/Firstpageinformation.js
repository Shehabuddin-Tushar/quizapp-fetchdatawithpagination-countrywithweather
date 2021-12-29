import React,{useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Secondpagequestionandans from './Secondpagequestionandans';
function Firstpageinformation() {
   
    const[myname,setName]=useState("");
    const[gender,setGender]=useState("");
    const[examstart,setExamstart]=useState(false);
    const history=useHistory();
    let gotoquizpage=(e)=>{
       e.preventDefault();
       if(myname!=="" && gender!==""){
           setExamstart(true)
       }else{
           alert("enter your name and gender")
       }
     
    }
    return (
        <div>
           {
               !examstart?<form onSubmit={gotoquizpage}>
               <input type="text" name="name" value={myname} onChange={(e)=>setName(e.target.value)}/>
               <select name="gender" onChange={(e)=>setGender(e.target.value)}>
                   <option value="">select Gender</option>
                   <option value="male">Male</option>
                   <option value="female">Female</option>
              </select>
              <input type="submit" value="start"/> 
           </form>:<Secondpagequestionandans perticipatename={myname}/>
           }
            
         
        </div>
    )
}

export default Firstpageinformation
