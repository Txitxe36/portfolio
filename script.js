let menuVisible = false;
//Funcion que oculta  o muestra el menu 
 function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
 }

 function seleccionar(){
    //oculta el menu una vez que se selecionae una opcion
    document.getElementById("nav").classList= "";
    menuVisible=false;
 }
 

 //funcion que aplica las animaciones de las habilidades
 function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distanciaSkills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distanciaSkills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("java");
        habilidades[3].classList.add("php");
        habilidades[4].classList.add("springboot");
        habilidades[5].classList.add("mysql");
        habilidades[6].classList.add("comunicacion");
        habilidades[7].classList.add("equipo");
        habilidades[8].classList.add("creatividad");
        habilidades[9].classList.add("dedicacion");
        habilidades[10].classList.add("responsabilidad");
        habilidades[11].classList.add("seriedad");
    }
 }
 //detecto el scrolling para aplicar la animacion de la bara de habilidades
 window.onscroll = function(){
    efectoHabilidades();
 }