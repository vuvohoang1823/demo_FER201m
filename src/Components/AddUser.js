import { useState } from 'react';
import { addUser } from '../features/Users';
import { useDispatch } from 'react-redux';
import {Box, Button, Card, TextField} from '@mui/material';



const AddUser = () => {
    const dispatch = useDispatch();
    const [name, setName]=useState('');
    const [username,setUsername]=useState('');
  return (
    <Card className="TextBox">
        <TextField
        style={{marginBottom:"1rem"}}
              label="Name"
              name="name"
              value={name}
              onChange={(event) => {setName(event.target.value);}}
            />
            <TextField
        style={{marginBottom:"1rem"}}
             name="username"
              label="Username"
              value={username}
              onChange={(event) => {setUsername(event.target.value);}}
            />
	<Button 
    style={{backgroundColor:"#007bff", color:"white"}}
    onClick={()=> {
              dispatch(addUser({id: 0, name: name, username: username}));
              }}
              >
             Add user
            </Button>
    </Card>
  )
}

export default AddUser