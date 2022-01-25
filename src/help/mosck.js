import Orbea from '../imagenes/biciclaeta.jpg'
import bloqueo from "../imagenes/bloqueo_horquilla.jpg"
import  shimeng from "../imagenes/shimeng.jpg"
import gti from "../imagenes/gti.jpg"
import amd from "../imagenes/amd.jpg"

const productos = [
    {
        id:"1" ,
        foto:Orbea ,
        name:"Bicicleta Orbea" ,
        precio:     45000  ,
        stock: 10 ,
        categoria:"bici"
    },
    {
        id:"2" ,
        foto:gti ,
        name:"Bicicleta GTI" ,
        precio:83034 ,
        stock: 5 ,
        categoria:"bici"
    },
    {
        id:"3" ,
        foto:amd ,
        name:"Bicicleta AMD" ,
        precio: 60000 ,
        stock: 7 ,
        categoria:"bici"
    },
    {
        id:"4" ,
        foto:bloqueo ,
        name:"Bloqueo horquilla" ,
        precio: 7940 ,
        stock: 20 ,
        categoria:"repuestos"
    },
    { 
        id:"5" ,
        foto:shimeng ,
        name:"Shimeng 7 Speed",
        precio: 2142,
        stock: 15,
        categoria:"repuestos"},
  
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