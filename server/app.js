const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const PORT = 4000;
const cookieParser  = require('cookie-parser');

const authRoutes = require("./routes/auth.routes")
const homeRoute = require("./routes/home.routes");

app.use(cors({
    origin: "http://localhost:5173",
    methods: ['GET', 'POST'],
    credentials: true,
}))
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public/upload")));


// Home route
app.use("/",homeRoute);


// AUTH routes 
app.use("/auth", authRoutes);




app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server listening on http://localhost:${PORT}`);
    }
});

