import {join} from 'path'
import  { studentModel,userModel} from '../models/studentModel.js'

// const homeController = (req,res)=>{
//     const data = { 'name':'mayanktamrkar',
//                     'age':'27',
//                     'address':'indore'}
//     res.render('home.ejs',data)

// }
// const callController = (req,res)=>{
//     const data = { 'name':'dev',
//     'age':'28',
//     'address':'indore'}
//     res.render('home.ejs',data)

// }
// const contactController = (req,res)=>{
//     res.sendFile(join(process.cwd(),'views','index.html'))

// }

class studentController{
    // static createDoc=(req,res)=>{

    
//create docoments with param
// const createDoc=async (nm)=> {
//     try{
//         const studentDoc = new studentModel({
//             name: nm
//         })
//         const result = await studentDoc.save()
//         console.log(result)
//     }catch (error)
//     {
//        console.log(error)
      

//     }
// }
    //     res.redirect("/create")
    // }

    static createDoc=async(req,res)=>{
        //res.render('/index.create')
        try{
            const {name,no,add}=req.params
            const doc = new studentModel({
                name:name,
                no:no,
                add:add
            })

            //saving doc 
            const result =await doc.save()

            console.log(result)
            console.log(req.params)
            console.log('yaha tak')
            //res.render("index")
            res.redirect("/index")


        }catch(error){
            console.log(error)
        }





       
    }

    static getallDoc=async (req,res)=>{
        try{
            //values search
            const result = await studentModel.find()
            //console.log("mm")
            //console.log(result)
            //values pass for index page 
            res.render("index.ejs",{data:result})
        }catch(error){
            console.log(error)
        }

     //   res.render("index")
    }

    static editDoc=async(req,res)=>{
        try{
           // const result = await studentModel.find(req.params.name)
            //console.log(result)
            res.render("edit.ejs")
        }catch{

            

        }
        console.log("ye editdoc hai")
       // console.log(req.params.name)
        
    }

    //for insert values ffrom    form 
    static create2Doc=async(req,res)=>{
        //res.render('/index.create')
        try{
            //pass values in model
            const {name,no,add}=req.body
            const doc = new studentModel({
                name:name,
                no:no,
                add:add
            })

            //saving doc 
            const result =await doc.save()

            console.log(result)
            console.log(req.body)
            console.log('yaha tak')
            //res.render("index")
            res.redirect("/index")


        }catch(error){
            console.log(error)
        }





       
    }

    static registration =async(req,res)=>{
        console.log("hello registration")
        res.render("registration.ejs")
    }

    // registration for user 
    static registration_2=async(req,res)=>{

        try {
            //get data from body 
            const { username,password}= req.body
            const docc = new userModel({
                username:username,
                password:password,

            })
                //add:add
            console.log(req.body)
            
            //saving doc 
            const result2 = await docc.save()
            console.log("submit hua kya")
            res.render('login.ejs')
        } catch (error) {
            console.log(error)
       
            
        }
     
    }
    //login verify function 
    static login_2 =async(req,res)=>{
        try {
            const { username,password }= req.body
            //find by username 
            const result = await userModel.findOne({username:username})
            if(result!=null){
                //chech username and password
                if(result.username==username&&result.password==password){
                    console.log("succes login")
                    const result = await studentModel.find()
                    res.render("index.ejs",{data:result})
                }else{
                    console.log(" wrong u p ")
                    res.send("username and password")
                }
            }else{
                res.render("registration.ejs")
            }
            
            console.log(result.username)
            console.log(result.password)
            console.log("verify hau ")
        } catch (error) {
         
          console.log(error)  
        }
       
        //console.log("hello registration")
        //res.render("login.ejs")
    }

    //render page login 
    static login =async(req,res)=>{
        //const result = await studentModel.find()
        console.log("this is login page ")
        res.render("login.ejs")
    }

}
export {studentController}