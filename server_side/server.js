const express =  require('express')
const app = express();
const bcrypt = require('bcrypt')
app.use(express.json())

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

app.listen(3000)