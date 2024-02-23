import { Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'

const Forms = (props) => {

    var [data, setData] = useState({
        id: props.data.id,
        name: props.data.name,
        age: props.data.age,
        dept: props.data.dept

    });
    const inputHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
        console.log(data);
    }


    const submit = () => {
        //if(props.method === 'post') {
        axios
            .post("http://localhost:4001/students", {
                student_name: data.name,
                student_age: data.age,
                student_dept: data.dept
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

            <br /><br /><br />
            <Typography variant='h3'>Add Student Details</Typography>
            <br /><br /><br />
            <TextField variant='outlined' name='name' value={data.name} onChange={inputHandler} label='Student Name'></TextField>
            <br /><br />
            <TextField variant='outlined' name='age' value={data.age} onChange={inputHandler} label='Age'></TextField>
            <br /><br />
            <TextField variant='outlined' name='dept' value={data.dept} onChange={inputHandler} label='Department'></TextField>
            <br /><br />
            <Button variant='contained' onClick={submit} color='primary'>SUBMIT</Button>



        </div>
    )
}

export default Forms