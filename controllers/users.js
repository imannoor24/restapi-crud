import {v4 as uuidv4} from 'uuid'; 
let users = []

export const getUsers = (req, res) => {
    console.log(users);
    res.send(users);
}

export const createUser = (req, res) =>
{
    const user = req.body;
    users.push( {...user, id: uuidv4() } ); 
    res.send(`User with username ${user.firstName} added to the database!`);
}

export const getUser = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id == id );
    res.send(req.params); 
}

export const deleteUser = (req, res) =>
{
    const { id } = req.params;
    users = users.filter((user) => user.id != id);
    res.send(`User with ${id} deleted from the database`); 
}

export const updateUser = (req, res) => {
    const {id} = req.params;
    const {firstName, lastName, Age} = req.body;
    const user = users.find((user) => user.id == id);
    if (firstName) {
        user.firstName = firstName; 
    }
    if (lastName) {
        user.lastName = lastName; 
    }
    if (Age) {
        user.Age = Age; 
    }
    res.send(`User with ${id} has been updated`);
}