const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

//ROUTES
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");


// connect to database
const connectMongodb = async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGO_URL}`)
        console.log('database is connected');
    }catch(err){
        console.log(err)
    }

}
connectMongodb();

// middleware
app.use(express.json())

//routes
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);


const PORT = process.env.PORT || 4000;
app.listen(process.env.PORT, ()=>{
    console.log(`server running at ${PORT}`);
})