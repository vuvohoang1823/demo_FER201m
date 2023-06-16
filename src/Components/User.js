import { Box, Button, Card, IconButton, ListItem, ListItemAvatar, ListItemText, TextField } from "@mui/material";
import React, {useState} from "react";
import {Delete, AccountCircle} from '@mui/icons-material';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { deleteUser, updateUsername } from '../features/Users';

const User = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);
  const [newUsername, setNewUsername] = useState('');

  return (
    <Card className="List">
      {userList.map((user) => (
        <ListItem key={user.id} style={{borderStyle:"solid", borderBottomColor:"#c5c5c5d9", borderTopColor:"white", borderWidth:".1rem"}}>
          <AccountCircle style={{fontSize:"3rem", marginRight:"1rem"}}/>
          <ListItemText primary={user.name} secondary={user.username} className="List-text"/>
          <TextField variant="filled" style={{width:"40rem"}}
            placeholder="Type new username..."
            onChange={(e) => setNewUsername(e.target.value)}
          />
          <Button
            style={{backgroundColor:"#007bff", color:"white", marginLeft:".5rem"}}
            onClick={() => {
              dispatch(updateUsername({ id: user.id, username: newUsername }));
            }}
          >
            Update
          </Button>
          <IconButton
            aria-label="delete"
            color="error"
            onClick={() => {
              dispatch(deleteUser({ id: user.id }));
            }}
          >
            <Delete />
          </IconButton>
        </ListItem>
      ))}
    </Card>
  );
};

export default User;
