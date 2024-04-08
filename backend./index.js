const express = require('express');
const app = express(); 
const cors = requrie('cors');
const port = 3000; 
app.use(express.json());  
app.use(cors()); 

const { creatCard, updateCard } = require('./types'); 
const { card } = require('./db'); 

app.post('/creatcard', async (req, res)=>{
    const creatPayload = req.body; 
    const parsePayload = creatCard.safeParse(creatPayload); 
        if (!parsePayload.success){
        res.status(411).json({
        msg:"You have sent the wrong inputs"
        })
        return; 
        }
        await card.creat ({
            title: creatPayload.title,
            description: creatPayload.description, 
            instalink: creatPayload.instalink,  
            xlink: creatPayload.xlink, 
            interest: creatPayload.interest
        })
        res.json({
            msg:"Card created"
        })
    }
)

app.get('/cards', async (req, res)=>{
    const cards = await card.find({}); 
    res.json({
        cards
    })
})

app.put('/')