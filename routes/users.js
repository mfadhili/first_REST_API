import express from "express"; // using express
import {createUser, getUser,getUserWithId, deleteUser, patchUser} from "../controllers/users.js" // for the control logic eleswhere for cleeaner code

const router = express.Router(); // initialised router just like app.get...


// all routes here will already begin with '/users' fro index.js
router.get('/', getUser);

router.post('/',createUser);

//using id
 router.get('/:id',getUserWithId );

//deleting routes
router.delete('/:id', deleteUser );

//patch = partial modial sth, put = complete override
router.patch('/:id', patchUser);

export default router; // so that it can be used in the index js

