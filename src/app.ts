console.log('hello nodejs from typesricpt')

// types
let a:number=44
enum Color{
    green,red,blue
}
let d:Color=Color.blue
let ab:[string,number]=['abc',44]

//interface and type
interface User{
    name:string,
    id:number,
    email?:string,//optional
    readonly createdAT:Date

}
const user:User={
    name:'rashed',
    id:3,
    createdAT:new Date(),
    email:'rashed@gmail.com'
}

type Product={
    title:string,
    price:number
}
let product:Product={
    title:'electronics',
    price:33
}