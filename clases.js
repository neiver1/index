// class curso{
// }

let Curso = class{
 nombre = "lenj. programacion";
 #numeroestudiantes = 32;

 constructor(){
    this.nombre="lenjuage de programacion avanzada";
    this.tutor="daniel arteaga";
 }

 getNombreCurso(){
return this.nombre
;
 }
getTutor(){
return this.tutor;
}

}
let curso=new Curso();

console.log(); curso.getNombreCurso();