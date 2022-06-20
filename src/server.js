// install and import express
const express = require('express')
 const Users = require('./assets/user.json')

//  const express = () => {expres()};
let app = express();


// Code here
app.get('/',async (req,res) => {
    try{
      return res.status(200).send(Users).sendFile(__dirname + "/assets/users.html");
    }
    catch(err){
       return res.status(400).send({message:err.message})
    }
})

app.get('/users',async (req,res) => {
    try{
    //   const users = await Users.find().lean().exec()
      return res.status(200).send(Users)
    }
    catch(err){
       return res.status(400).send({message:err.message})
    }
})

app.get('/users/:id',async (req,res) => {
    try{
       const users = Users.filter(e => e.id == req.params.id)
      return res.status(200).send(users)
    }
    catch(err){
    return res.status(400).send({message:err.message})
    }
})

app.post('/users',async (req,res) => {
    try{
      const users = await Users.create(req.body)
      return res.status(200).send(users)
    }
    catch(err){
       return res.status(400).send({message:err.message})
    }
})


app.listen(8000,function(){
    console.log('yes')
})
  
// Note: Do not remove this export statement
module.exports = app;
