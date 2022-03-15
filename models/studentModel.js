import mongoose from "mongoose"

//create schmea for model 
const studentSchema =new mongoose.Schema({name:{type:String}},
                                          {no:{type:Number}},
                                          {add:{type:String}}

)
//create user  collection 
const studentModel = mongoose.model('Student',studentSchema)

const userSchema = mongoose.Schema({
    username: { type: String, required: true },
    //description: { type: String, required: true },
    //imageUrl: { type: String, required: true },
    //userId: { type: String, required: true },
    password: { type: Number, required: true },
  });




// const userSchema =new mongoose.Schema({username:{type:String}},
//                                       {password:{type:Number}}
// )

const userModel=mongoose.model('User',userSchema)

//whithout parameter
// const createDoc=async ()=> {
//     try{
//         const studentDoc = new studentModel({
//             name: 'mayank'
//         })
//         const result = await studentDoc.save()
//         console.log(result)
//     }catch (error)
//     {
//        console.log(error)
      

//     }
// }
//whith paramerter valuses pass

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



export { studentModel,userModel }