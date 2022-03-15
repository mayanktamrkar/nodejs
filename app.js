import express from 'express'
const app = express()
const port = process.env.PORT || '3000'
import {join} from 'path'
import about from './routes/home.js'
import {connectDB}  from './db/connect.js'
//import createDoc from './models/studentModel.js' 
// when you working in comman js 
//const about=require ('./routes/about.cjs')
//import {join} from 'path'

//ejs template using 
app.set('view engine','ejs')
//whithout parmater
//createDoc()
//wiht parmater
//createDoc('mayanktamrkar')

//for get values from form
app.use(express.urlencoded({extended:false}))
app.use('/static',express.static(join(process.cwd(),'public')))
app.use('/',about)
const DATABASE_URL = process.env.DATABASE_URL||"mongodb://localhost:27017"

//connect database 
connectDB(DATABASE_URL)
//app.use('/all',home)
//##middlware useing
//app.use(myLogger)



app.listen(port,(req,res)=>{
    console.log(`server run on http://localhost:${port}`)
})