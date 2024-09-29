const express = require('express')
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = require('./models/userSchema');
const app = express()
const port = 3555
app.use(express.json())



mongoose.connect('mongodb+srv://apurbadassourav:1831511850@uselist.8ny8i.mongodb.net/userlist?retryWrites=true&w=majority&appName=uselist')
.then(() => console.log('Connected!'));

app.post('/user', (req, res) => {
//   console.log(req.body);
//   res.send=(req.body)
  const {firstname, lastname, email, password}=req.body
  if(!firstname){
    res.send('firstname is required')
  }
  if(!lastname){
    res.send('lastname is required')
  }
  if(!email){
    res.send('email is required')
  }
  if(!password){
    res.send('password is reqired')
  }
    
  bcrypt.hash(password, 10, function(err, hash) {
    const users=new userSchema({
       firstname:firstname,
        lastname:lastname,
        email:email,
        password:hash
    })
    users.save()
    res.send(users)
    })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})