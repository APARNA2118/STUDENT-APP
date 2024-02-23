import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useState } from 'react'

const Viewstudent = () => {
  
    var [names,setNames] = useState ([
        {'name': 'Tony', 'age': '20', 'dept': 'cse'},
        {'name': 'Bruce', 'age': '20', 'dept': 'cse'},
        {'name': 'Maria', 'age': '20', 'dept': 'cse'}
        ]);

  return (
    <div>

    <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{color:'black',fontFamily:'cursive',fontSize:'30px'}}>Student Details</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {names.map((val,ind)=>{
                        return(
                            <TableRow>
                            
                                <TableCell>{val.name}</TableCell>
                                <TableCell>{val.age}</TableCell>
                                <TableCell>{val.dept}</TableCell>
                            </TableRow>


                        )
                    })}


                   
                </TableBody>
            </Table>
        </TableContainer>


    </div>
  )

}

export default Viewstudent
