import express from 'express';
import {v4 as uuidv4} from 'uuid'; 
import { getUsers, createUser, getUser, deleteUser, updateUser  } from '../controllers/users.js'; 

const router = express.Router();

//feches all the users
router.get('/', getUsers);
//adds users
router.post('/', createUser ); 
//fetches a single user 
router.get('/:id', getUser ); 
//deletes a user
router.delete('/:id', deleteUser);
//updates a user
router.patch('/:id', updateUser);


export default router; 