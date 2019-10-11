
var titulos=new Array();
var enlaces=new Array();
//Datos de los submenús
titulos[0]=new Array(
          "Galería de fotos",
          "Video");
enlaces[0]=new Array("galeria_foto.html","video.html");
titulos[1]=new Array(
          "Dossier",
          "Propuesta Didáctica");
enlaces[1]=new Array("dossier_esp.html","propuesta_esp.html");
titulos[2]=new Array(
          "Dossier",
          "Proposta didàctica");
enlaces[2]=new Array("dossier_cat.html","propuesta_cat.html");	
titulos[3]=new Array(
          "Dossier",
          "Proposta Didáctica");
enlaces[3]=new Array("dossier_gal.html","propuesta_gal.html");	
titulos[4]=new Array(
          "Txostena",
          "Proposamen didaktikoa");
enlaces[4]=new Array("dossier_eus.html","propuesta_eus.html");  

//arrays para guardar elementos de la lista y submenús:
var menu=new Array()
var submenu=new Array()

window.onload = function() {
//BARRA DE NAVEGACIÓN: Crear desplegables:
for (i=0;i<titulos.length;i++) {
     //localizar elementos principales
     menu[i]=document.getElementById("seccion"+i);
     //crear elemento menu desplegable
     menu[i].innerHTML+="<div id='subseccion"+i+"'></div>"
     //localizar elemento menu desplegable
     submenu[i]=document.getElementById('subseccion'+i);
     //escribir menu desplegable
     for (j=0;j<titulos[i].length;j++) {
         submenu[i].innerHTML += "<p><a href='"+enlaces[i][j]+"'>"+titulos[i][j]+"</a></p>";
         }
     //estilo de los submenús
     menu[i].style.position="relative";
     submenu[i].style.position="absolute";
     submenu[i].style.top="60px";
     submenu[i].style.left="10px";
     submenu[i].style.backgroundColor="#fff";
     submenu[i].style.font="normal 0.8em";
     submenu[i].style.padding="0.2em 0.5em";
     submenu[i].style.zIndex = "1";
     submenu[i].style.width = "20em";
     submenu[i].style.border = "2px solid #b5b3b3";
     submenu[i].style.display="none"
     }	
//eventos para ver - ocultar menu
for (i=0;i<titulos.length;i++) {
    menu[i].onmouseover = ver;
    menu[i].onmouseout = ocultar;
    } 
}
//función para ver los menús desplegables.
function ver() {
         muestra=this.getElementsByTagName("div")[0];
         muestra.style.display="block"
         }
//funcion para ocultar los menús desplegables.
function ocultar() {
         oculta=this.getElementsByTagName("div")[0];
         oculta.style.display="none"
         }