import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'

const Addstudent = () => {

  var[temp,setTemp] = useState();
    const inputHandler = (e) => {
        setTemp({...temp,[e.target.name]:e.target.value});
        console.log(temp);
    }
    const submit = () => {
        //if(props.method === 'post') {
            axios
            .post("http://localhost:4001/students", {
                student_name:temp.name,
                student_age:temp.age,
                student_dept:temp.dept
            })
            .then(() => {
                alert("New entry created successfully");
            })
            .catch(() => {
                alert("Error saving data");
            })
        }

  return (
    <div>
        <br /><br /><br /><br />
        <Typography variant='h3'>Add Student Details</Typography>
        <br /><br />
        <TextField variant='outlined' sname='name' onChange={inputHandler} label='Name'></TextField>
        <br /><br /><br />
        <TextField variant='outlined' sname='age' onChange={inputHandler} label='Age'></TextField>
        <br /><br /><br />
        <TextField variant='outlined' sname ='dept' onChange={inputHandler} label='Department'></TextField>
        <br /><br /><br />
        
        <Button variant='contained' onclick={submit} color='primary'>SUBMIT</Button>
        
    </div>
  )
}

export default Addstudent