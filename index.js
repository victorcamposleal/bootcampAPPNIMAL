const express=require('express')
const app=express();
let animales=[{nombre:'perro',tipo:'pastor',edad:18}, {nombre:'gato',tipo:'bengala',edad:20},{nombre:'cocodrilo',tipo:'verde',edad:19}]

app.use(express.static('public'))

app.get('/',function(request,response) {

    
   response.send(animales)
    
        
    })

app.get('/sumar-animal',function(request,response) {
let animal=request.query.anmimal
let tipo=request.query.tipo
let edad=request.query.edad
 let animale={animal:animal,tipo:tipo,edad:edad}
 animales.push(animale)


response.send(animales)
})

app.listen(3000)