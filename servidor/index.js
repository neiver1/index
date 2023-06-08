const express = require('express');
const app = express();
const port = 3000;

async function suma(valor1, valor2){
    let promesa = await new Promise((resolve,reject)=>{
        setTimeout(resolve,500,5);  
    });
    console.log(valor1+valor2);
    return valor1+valor2
}

app.get('/', (req,res)=>{
res.send(`hola ${suma(3+5)}`);
});


app.listen(port, ()=>{
console.log(`el servidor esta funcionando en el puerto ${port}`);
});