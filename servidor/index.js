const express = require('express');
const app = express();
const port = 3000;

//callback
//express.request('www.google.com', function(){
//    console.log( "hola" );
//});

let request = require('reques-promise');
request('www.google.com')
.then( // se ejecuta despues de la peticion 
function(){
    console.log("hola");
}
).catch(//en caso de error
function(err){
    console.log(err);l
}
)


app.get('/', (req,res)=>{
res.send('hola estudiantes');
});


app.listen(port, ()=>{
console.log(`el servidor esta funcionando en el puerto ${port}`);
});