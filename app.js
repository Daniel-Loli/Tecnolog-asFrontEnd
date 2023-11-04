const item1=document.querySelector('#item1');
const item2=document.querySelector('#item2');
const item3=document.querySelector('#item3');
const item4=document.querySelector('#item4');
const item5=document.querySelector('#item5');
const descriptionCard=document.querySelector('#description-card');
const imageCard=document.querySelector('#image-card');
const card=document.querySelector('#card');
const welcome=document.querySelector('#welcome');
const imgcard=document.querySelector('#img-card');
const p1=document.querySelector('#p1');
const p2=document.querySelector('#p2');

item1.addEventListener('click',mostrarCard);
item2.addEventListener('click',mostrarCard);
item3.addEventListener('click',mostrarCard);
item4.addEventListener('click',mostrarCard);
item5.addEventListener('click',mostrarCard);
class lenguajes{
    //atributos
    constructor(nombre,descripcion,img){
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.img=img;
        }
    //metodos
    
}
let arrayLenguaje=[];
arrayLenguaje[0]=new lenguajes("Python", "Python es un lenguaje de programación ampliamente utilizado en las aplicaciones web, el desarrollo de software, la ciencia de datos y el machine learning (ML). Los desarrolladores utilizan Python porque es eficiente y fácil de aprender, además de que se puede ejecutar en muchas plataformas diferentes.",'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=600');
arrayLenguaje[1]=new lenguajes("JavaScript","JavaScript es un lenguaje de programación que los desarrolladores utilizan para hacer páginas web interactivas. Desde actualizar fuentes de redes sociales a mostrar animaciones y mapas interactivos, las funciones de JavaScript pueden mejorar la experiencia del usuario de un sitio web.",'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=600');
arrayLenguaje[2]=new lenguajes("Html 5", "El HTML5 es un estándar que sirve para definir la estructura, el diseño y el contenido de una página web. En realidad, se trata de un código, un lenguaje (HTML) que define los contenidos que forman parte de una página web, como imágenes, texto, vídeos, juegos, marcos, estilo de letra, etc.",'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=600');
arrayLenguaje[3]=new lenguajes("CSS","CSS es un lenguaje de diseño gráfico que permite definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado. Es muy usado para establecer el diseño visual de los documentos web e interfaces de usuario escritas en HTML.",'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=600');
arrayLenguaje[4]=new lenguajes("ReactJs", "React es una librería Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre.",'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=600');


function mostrarCard(){
    


    if(this.id=='item1'){
        card.classList.remove('inactive');
        welcome.classList.add('inactive');
        p1.innerHTML=arrayLenguaje[0].nombre;
        p2.innerHTML=arrayLenguaje[0].descripcion;
        imgcard.src=arrayLenguaje[0].img;
    }
    else if(this.id=='item2'){
        card.classList.remove('inactive');
        welcome.classList.add('inactive');
        p1.innerHTML=arrayLenguaje[1].nombre;
        p2.innerHTML=arrayLenguaje[1].descripcion;
        imgcard.src=arrayLenguaje[1].img;
    }
    else if(this.id=='item3'){
        card.classList.remove('inactive');
        welcome.classList.add('inactive');
        p1.innerHTML=arrayLenguaje[2].nombre;
        p2.innerHTML=arrayLenguaje[2].descripcion;
        imgcard.src=arrayLenguaje[2].img;
    }
    else if(this.id=='item4'){
        card.classList.remove('inactive');
        welcome.classList.add('inactive');
        p1.innerHTML=arrayLenguaje[3].nombre;
        p2.innerHTML=arrayLenguaje[3].descripcion;
        imgcard.src=arrayLenguaje[3].img;
    }
    else if(this.id=='item5'){
        card.classList.remove('inactive');
        welcome.classList.add('inactive');
        p1.innerHTML=arrayLenguaje[4].nombre;
        p2.innerHTML=arrayLenguaje[4].descripcion;
        imgcard.src=arrayLenguaje[4].img;
    }



}

