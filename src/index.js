const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const db = require('./firebaseDB');
const userRouter = require('./usersModule/routes/user.routes');

/*
// Initialize the Firebase Admin SDK with your service account credentials
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

// Get a reference to the Firestore database
const db = admin.firestore();

// Database is connected or not
db.collection('users').get().then(success => {
    console.log("DB is connected!");
    console.log(`Retrieved size is ${success.size} documents from the "users" collection.`);
}).catch(error => {
    console.error("Error:-", error);
});
 */
// Use the express.json middleware to parse incoming JSON data
app.use(express.json());

app.use(cors());

app.use('/users', userRouter);
/* // Define a route for creating a new user
app.post('/create-user', async (req, res, next) => {
    try {
        // Get the user data from the request body
        let Body = req.body;
        // Add the user to the 'users' collection
        let saveResult = await db.collection('users').add(Body);
        if (saveResult) {
            // Send a '201 Created' response
            return res.status(201).send({ status: true, message: "Data saved successfully!", data: null });
        }
        else {
            return res.status(401).send({ status: false, message: "Data couldn't saved successfully!", data: null });
        }
    }
    catch (error) {
        console.error("Catch error:-", error);
        res.status(500).send({ status: false, message: error.message, data: null });
    }
});

// Define a route for getting all users
app.get('/users', async (req, res, next) => {
    try {
        // Get all documents from the 'users' collection
        const queryResult = await db.collection('users').get();
        // Map over the documents and create an array of user objects
        let userResult = queryResult.docs.map(doc => {
            return { id: doc.id, ...doc.data() }
        });
        if (userResult.length > 0) {
            // Send the array of users as a JSON response
            return res.status(200).send({ status: true, message: `${userResult.length} data found!`, data: userResult });
        }
        else {
            return res.status(401).send({ status: false, message: "No data found!", data: null });
        }
    }
    catch (error) {
        console.error("Catch error:-", error);
        res.status(500).send({ status: false, message: error.message, data: null });
    }
});

// Define a route for finding single user using id
app.get('/find-user', async (req, res, next) => {
    try {
        // Get the user data from the request body
        let id = req.body.id;
        // Query the 'users' collection for the user with the given id
        const queryResult = await db.collection('users').doc(id).get();
        // Map over the documents and create an array of user objects
        let userResult = queryResult.data();
        if (userResult) {
            return res.status(200).send({ status: true, message: `Data found!`, data: userResult });
        }
        else {
            return res.status(401).send({ status: false, message: "No data found!", data: null });
        }
    }
    catch (error) {
        console.error("Catch error:-", error);
        res.status(500).send({ status: false, message: error.message, data: null });
    }
});

// Define a route for updating user details using user id
app.post('/update-user', async (req, res, next) => {
    try {
        // Get the user data from the request body
        let Body = req.body;
        let id = req.body.id;
        console.log("Body:-", Body);
        delete Body.id;
        console.log("id:-", id);
        console.log("Body:-", Body);
        // Query the 'users' collection for the user with the given id
        const queryResult = await db.collection('users').doc(id).update(Body);
        if (queryResult) {
            return res.status(200).send({ status: true, message: `Data found!`, data: queryResult });
        }
        else {
            return res.status(401).send({ status: false, message: "No data found!", data: null });
        }
    }
    catch (error) {
        console.error("Catch error:-", error);
        res.status(500).send({ status: false, message: error.message, data: null });
    }
});

// Define a route for deleting user using id
app.post('/delete-user', async (req, res, next) => {
    try {
        // Query the 'users' collection to delete the user using given id
        const queryResult = await db.collection('users').doc(req.body.id).delete();
        if (queryResult) {
            return res.status(200).send({ status: true, message: `User deleted successfully!`, data: queryResult });
        }
        else {
            return res.status(401).send({ status: false, message: "User couldn't deleted successfully!", data: null });
        }
    }
    catch (error) {
        console.error("Catch error:-", error);
        res.status(500).send({ status: false, message: error.message, data: null });
    }
}); */

app.listen(2023, () => {
    console.log(`Server is running on localhost:${2023}`);
})