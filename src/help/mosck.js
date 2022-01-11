import bici from '../imagenes/biciclaeta.jpg'
const productos = [
    {id:"1"  ,foto:bici ,name:"Bicicleta Orbea" ,precio:"30000$" ,stock:"10"},
    {id:"2"  ,foto:bici ,name:"Bicicleta Orbea" ,precio:"30000$" ,stock:"5"},
    {id:"3"  ,foto:bici ,name:"Bicicleta Orbea" ,precio:"30000$" ,stock:"17"}
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