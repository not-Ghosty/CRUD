import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import abc from './home.module.css'

const Edituser = () => {
  let [name,setName]=useState("")
  let [salary,setSalary]=useState("")
  let [company,setCompany]=useState("")
  let navigate=useNavigate()
  let {index}=useParams()
  let getName=(event)=>{
    setName(event.target.value)
}
let getSalary=(event)=>{
    setSalary(event.target.value)  
}
let getCompany=(event)=>{
  setCompany(event.target.value) 
}

useEffect(()=>{
    axios.get(`http://localhost:3000/content/${index}`)
    .then((response)=>{
      setName(response.data.name)
      setSalary(response.data.salary)
      setCompany(response.data.company)
    })
  },[index])
  let formhandle=(e)=>{
    e.preventDefault();
    let payload={name,salary,company}
    axios.put(`http://localhost:3000/content/${index}`,payload)
    .then(()=>{
      console.log("Data has been updated");
    })
    navigate("/users")  //this is used to change the pafe to users on clicking the update button
  }
  return (
    <div id={abc.createusers}>
    <section id={abc.mainform}>
      <form action="">
      <table id={abc.table}>
          <tr>
            <th colSpan="2"><h1>Employee details</h1>  </th>
          </tr>
          <tr>
            <td><label htmlFor="">Name: </label></td>
            <td><input type="text" value={name} onChange={getName} /></td>
          </tr>
          <tr>
            <td><label htmlFor="">Salary: </label></td>
            <td><input type="text" value={salary} onChange={getSalary}/></td>
          </tr>
          <tr>
            <td><label htmlFor="">Company: </label></td>
            <td><input type="text" value={company} onChange={getCompany}/></td>
          </tr>
          <th colSpan="2" id={abc.buttr}><button id={abc.button} onClick={formhandle}>
           UPDATE
          </button><br />
         
          
          </th>
           </table>
      </form>
      
    </section>

  </div>
  )
}

export default Edituser