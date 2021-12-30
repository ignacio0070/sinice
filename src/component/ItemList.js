import bici from '../imagenes/biciclaeta.jpg'
const productos = [
    {id:1  ,foto:bici ,name:"bicicleta orbea" ,precio:"30000$"},
    {id:2  ,foto:bici ,name:"bicicleta orbea" ,precio:"30000$" },
    {id:3  ,foto:bici ,name:"bicicleta orbea" ,precio:"30000$"}
]




export const getFetch = new Promise((resolve,reject)=>{
    let condicion= true
    if(condicion){
        setTimeout(()=>{
            resolve(productos)
        
        }, 3000)
        
    }else{
        reject("error")
    }
})