import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser';

//component
import Connection from './database/db.js'; 
import route from './routes/route.js';




const app = express();
const port=8000;

app.use(cors())
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',route)


Connection();
app.listen(port, ()=>{
    console.log(`your server is running on port ${port}`)
})