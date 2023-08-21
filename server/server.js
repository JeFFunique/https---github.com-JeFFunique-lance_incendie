const express=require('express');
const cors=require('cors');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const router=require('./devisRoute');
const app=express();
mongoose.connect(`mongodb+srv://extincteurlanceincendie:jeanfabrice.1974@cluster0.f6pl6hk.mongodb.net/?retryWrites=true&w=majority`);
const database=mongoose.connection;
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
app.use(express.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(cors());
app.use("/api", router);
app.listen(5000, () => console.log("server running on port 5000"));
module.exports=app;