const express =  require('express') // calling express
const app = express(); // backend server
const bcrypt = require('bcrypt') // used to hash the password
const path = require('path'); // handles the path in the client side
//allowing app to use json file
app.use(express.json())
//calling the api for the user
const users = []

// get users
app.get('/users', (req,res)=>{
    res.json(users)
})
// creat users
app.post('/users', async(req,res)=>{
    try{
        const hasspass = await bcrypt.hash(req.body.password,10)
        const user = { name: req.body.name, password: hasspass }
        users.push(user)
        res.status(201).send()
    }
    catch{
        res.status(500).send()
    }
})

//login for the user
app.post('/users/login', async(req,res) =>{
    const user = users.find(user => user.name = req.body.name)
    if(user == null){
        return res.status(400).send('Cannot find user')
    }
    try{
        if(await bcrypt.compare(req.body.password,user.password)){
            res.status(200).send('Success')
        }
        else{
            res.send('Not allowed')
        }
    }
    catch{
        res.status(500).send()
    }
})
//used for serving the user file
app.use(express.static(path.join(__dirname, '..', 'client_side')));

app.listen(3000,() =>{
    console.log('server is running fine on port 3000')
})