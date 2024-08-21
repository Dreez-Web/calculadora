/*constantes para seleccionar etiquetas desde el html */
const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click", () =>{
        const botonApretado = boton.textContent;
        /*Si se aprieta c la pantalla se vuelve a 0*/ 
        if (boton.id === "c") {
            pantalla.textContent = "0";
            return;
        }
        
        /*Si se aprieta borrar y hay un digito (length === 1) o da Error! la pantalla se vuelve a 0*/ 
        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!"){
                pantalla.textContent = "0";
            }else{
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        /*Si se aprieta igual la pantalla devuelve un resulta gracias a eval
        en caso de tener operaciones incorrectas da un Error!*/ 
        if (boton.id === "igual") {
            try{
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = "Error!"
            }
            return;
        }

        /*Si se aprieta 0 o da error se puede colocar cualquier numero*/ 
        if(pantalla.textContent === "0" || pantalla.textContent === "Error!")
        {
            pantalla.textContent = botonApretado;
        }else{
            pantalla.textContent += botonApretado;
        }
    })
})