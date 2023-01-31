import React, { useState } from 'react'

const Contform = () => {
    let [name,setName]=useState("")
    let [age,setAge]=useState(0)

    let getName=(event)=>{
        setName(event.target.value)
    }
    let getAge=(event)=>{
        setAge(event.target.value)
    }
    let print=(e)=>{
        e.preventDefault();
        console.log(name);
        console.log(age);
    }
  return (
    <div>
        <form action="">
            <label htmlFor="">Name: </label>
            <input type="text" onChange={getName}/><br />
            <label htmlFor="">Age: </label>
            <input type="text" name="" id="" onChange={getAge}/><br /><br />
            <button onClick={print}>submit</button>
        </form>
    </div>
  )
}

export default Contform