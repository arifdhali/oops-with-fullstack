const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const PORT = 4000;

app.use(cors({
    origin: "http://localhost:5173",
    methods: ['GET', 'POST'],
    credentials: true,
}))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public/upload")));
const userRoutes = require("./routes/user.routes")


// Home route


// User routes 
app.use("/auth", userRoutes);




app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server listening on http://localhost:${PORT}`);
    }
});

