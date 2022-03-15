import express from 'express'
//import homeController from '../controller/homeController'
const router =  express.Router()
import {join} from 'path'

// for messing showing function 
//import myLogger from '../middleware/logger-middleware.js'
import { studentController} from '../controller/homeController.js'


//import call from '../controller/homeController.js'

//params 
//router.get('/city/:id-:to',(req,res)=>{
    //const abc=req.params.id ;
  //  const def=req.params.to ;
    //res.send(`student ${abc},${req.params.to}`)
    
    
//})


router.get('/index',studentController.getallDoc)
router.get('/index/create/:name/:no/:add',studentController.createDoc)
router.post('/index/registration',studentController.registration_2)
router.get('/index/registration',studentController.registration)
router.post('/index',studentController.create2Doc)
router.post('/index/login',studentController.login_2)
router.get('/index/login',studentController.login)

//import {homeController} from ' ../controller/homeController.js'   
//router.get('/:id',(req,res)=>{
  //  res.send(`student ${req.params.id}`)
//})


// router.get('/',(req,res)=>{
//     res.sendFile(join(process.cwd(),'views','index.html',abc,def))
// })

//all address 
// router.get('*',(req,res)=>{
//     res.send('page not found')
// })


export default router