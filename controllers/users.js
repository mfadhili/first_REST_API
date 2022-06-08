import { v4 as uuidv4 } from "uuid"; // uuid importing after npm install uuid
import express from "express"; // using express

let users =[
    //
 ]
 
export const createUser = (req,res) =>{
        //console.log('POST ROUTE REACHED');
        //res.send("POST ROUTE REACHED")
       //console.log(req.body); // checking ehat is being recieved
       const user = req.body; 
    
       //const userId = uuidv4(); //giving the item a unique id
    
       const userWithId = {...user, id: uuidv4()}; // spread operator and creating object
       users.push(userWithId);
        res.send(`User with the name ${user.firstName} and id ${userWithId.id} has been added to the database!`);
    
}

export const getUser = (req,res) =>{
    //res.send('HELLO');
    res.send(users);
}

export const getUserWithId = (req,res) => {
    const { id } = req.params; //using destruction to get id or const is = req.params.id

    const foundUser = users.find((user) => user.id == id)
    res.send(foundUser);
   }

export const deleteUser = (req,res) => {
    const { id } = req.params;

    //using filter function
    users = users.filter((user) => user.id !== id);

    res.send(`user with id ${id} has been deleted from the database.`);

}
export const patchUser = (req,res) => {
    const {id} = req.params;
    
    //get the items from the request body
    const {firstName, lastName, age} = req.body;

    //find the user with the id param
    const userTobeUpdate = users.find(user => user.id == id);

    //updating
    if (firstName) userTobeUpdate.firstName = firstName;
    if (lastName) userTobeUpdate.lastName = lastName;
    if (age) userTobeUpdate.age = age;

    res.send(`user with the id ${id} has been updated`);


}