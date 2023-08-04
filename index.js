const express = require('express');
const dotenv = require('dotenv').config()
const cors = require('cors')
require('./src/db/config')
const User = require('./src/db/User')
const Product = require('./src/db/Product')
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;
// const dbConnection= async()=>{
//     mongoose.connect("mongodb://127.0.0.1:27017/e-commerce-data");
//     const productSchema = new mongoose.Schema({});
//     const product = mongoose.model("products",productSchema);
//     const data = await product.find();
//     console.log(data)

// }
// dbConnection();
// Set up the view engine and static file directory.  This is where we will store our



//in nodes js application how get data from react and postman using middleware app.use(express.json())






//register
 app.post("/register",async(req,resp)=>{
    const data = new User(req.body);
    const result = await data.save();
    result = result.toObject();
    delete obj.password;
    resp.send(result)
 })

//login

 app.post("/login",async(req,resp)=>{
    if(req.body.email && req.body.password){
   let result= await User.find(req.body).select("-password");
   if(result){
   resp.send(result);
   }
   else{
    resp.send({result:"User Not Found"})
   }
}
else{
    resp.send({result:"User Not Found"})
   }
 })

//add product
app.post("/add",async(req,resp)=>{
    const product = new Product(req.body);
    const result = await product.save();
    resp.send(result);
})

//get all Product
app.get('/products',async(req,resp)=>{
    let data = await Product.find({});
    resp.send(data);
   // console.log(data);
})

app.delete('/product/:id',async(req,resp)=>{
    let delProduct = await Product.deleteOne({_id:req.params.id})
    resp.send(delProduct);
})

app.get('/product/:id',async(req,resp)=>{
    let data = await Product.findOne({_id:req.params.id});
    console.log(data);
    resp.send(data);
})

app.put('/product/:id',async(req,resp)=>{
    let data = await Product.updateOne(
        {_id:req.params.id},
        {$set:req.body}
)
resp.send("Updated Successfully")
console.log(data);
})

app.listen(PORT,()=>{console.log(`Server Running On ${PORT}`)})