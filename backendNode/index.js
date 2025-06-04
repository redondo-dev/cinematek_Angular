
const express = require ("express");
const cors =require ("cors");
const authRoutes=require("./routes/authRoutes");
const jwt =require("jsonwebtoken")
const cookieParser = require("cookie-parser");
const ReservationsRoutes = require("./routes/reservationsRoutes");
const  userRoutes = require ('./routes/userRoutes')
require('dotenv').config();


const app = express();
const port =3000;

app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());


app.use( '/', authRoutes);
app.use('/reservations',ReservationsRoutes)
app.use('/users',userRoutes)

app.listen(port,()=>{
  console.log(`le serveur est demarré sur le port ${port}`);
});
