require('dotenv').config()

const PORT =  process.env.PORT || 5000;
const express = require('express');
const userRoutes = require('./routes/users.js');
const middlewareLogRequest = require('./middleware/logs.js');
 
const app = express()

// app.method(path, handler);

// app.use("/", (req, res, next) => {
//     res.send("Hello World");
// })

app.use(middlewareLogRequest);
app.use(express.json());

app.use("/users", userRoutes)

app.listen(PORT, ()=> {
    console.log('Server Berhasil di running di port', PORT);
})