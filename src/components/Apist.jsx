import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Forms from './Forms';


const Apist = () => {
    var [edit, setEdit] = useState(false);
    var [selected, setSelected] = useState({});
    var [user, setUsers] = useState([])
    useEffect(() => {
        axios.get("http://localhost:4001/students")
            .then((respose) => {
                //console.log(respose.data);
                setUsers(respose.data);
            })
    }, []);

    const deleteUser = (id) => {
        axios.delete("http://localhost:4001/students/" + id).then(() => {
            alert("Delted Row");
            window.location.reload();    //auto-reload of page
        })
            .catch(() => {
                alert("Deleting Field")
            })
    }

    const editUser = (id) => {
        axios
            .get("http://localhost:4001/students/" + id)
            .then((response) => {
                setSelected(response.data);
                setEdit(true);
            })
            .catch(() => {
                alert("Cannot edit now");
            });
    };

    return (
        <div>
            {edit ? (<Forms method="Put" data={{ id: selected.id, name: selected.student_name, age: selected.student_age, dept: selected.student_dept }} />)
                : (
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Age</TableCell>
                                    <TableCell>Department</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {user.map((val, ind) => {
                                    return (
                                        <TableRow>
                                            <TableCell key={ind}>{val.student_name}</TableCell>
                                            <TableCell key={ind}>{val.student_age}</TableCell>
                                            <TableCell key={ind}>{val.student_dept}</TableCell>
                                            <TableCell>
                                                <Button onClick={() => { editUser(val._id); }}>EDIT</Button>
                                            </TableCell>
                                            <TableCell>
                                                <Button onClick={() => { deleteUser(val._id); }} >DELETE</Button>
                                            </TableCell>
                                        </TableRow>

                                    )
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
        </div>
    )
}

export default Apist