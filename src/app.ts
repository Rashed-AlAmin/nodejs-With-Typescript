import express,{Express,Request,Response,NextFunction} from 'express'
import { IUser, User} from './models/user.js'

const app:Express=express()

app.use(express.json())

interface customReq extends Request{
    startTime?:number
}
app.use((req:customReq,res:Response,next:NextFunction)=>{
    req.startTime=Date.now()
    next()
})

//create user    req {},{},{},{},{}  req.param,res, req.body, req.query, locals
interface User{
    name:string,
    email:string
}
app.post('/user',(req:Request<{},{},User>,res:Response)=>{
    const{name,email}=req.body
    res.json({
        message:`user ${name} is created ${email}`
    })
})

//get a user from id
app.get('/users/:id',(req:Request<{id:string}>,res:Response)=>{
    const {id}=req.params
    res.json({
        userId:id
    })
})

app.get("/",(req:Request,res:Response)=>{
    res.send('hello typescript with express')
})

app.get('/users', async(req,res)=>{
    try{
        const user:IUser[]=await User.find({})
    }catch(e){
        res.status(400).json("some error")
    }
})

const port=3000;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})