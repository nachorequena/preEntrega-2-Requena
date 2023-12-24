

class productos {
    constructor(nombre, precio, img, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.categoria = categoria;
    }

}

const PROD1 = new productos("coca cola", 1000, "coca.png", "bebidas");
const PROD2 = new productos("seven up", 1000, "seven.png", "bebidas");
const PROD3 = new productos("hamburguesa", 1800, "hamburguesa.png", "comidas" );
const PROD4 = new productos("pizza", 2000, "pizza.png", "comidas");
const PROD5 = new productos("pancho", 1500, "pancho.png", "comidas");
const PROD6 = new productos("papas fritas", 1200, "papas.avif", "comidas");
const PROD7 = new productos("sandwich", 1200, "sandwich.png", "comidas");
const PROD8 = new productos("fanta", 900, "fanta.png", "bebidas");


//CARDS DINAMICAS
const arrayProductos = [PROD1, PROD2, PROD3, PROD4, PROD5, PROD6, PROD7, PROD8]
const contenedorProductos = document.getElementById("sectionContenedor")
arrayProductos.forEach(productos => {
    const DIV = document.createElement("div")
    DIV.className = "productos"
    DIV.innerHTML = `
                    <div class="card">
                        <img src="${productos.img}" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="card-title">${productos.nombre}</h5>
                            <p class="card-text">$${productos.precio}</p>
                            <a href="#" class="btn btn-primary">comprar</a>
                        </div>
                    </div>
                     `

    contenedorProductos.appendChild(DIV);
})


//BUSCADOR
const buscador = document.getElementById("buscador")

buscador.addEventListener("keyup", e=>{

    if (e.target.matches("#buscador")){
  
        if (e.key ==="Escape")e.target.value = ""
        console.log(e.target.value)
        document.querySelectorAll(".productos").forEach(articulo =>{
  
            articulo.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?articulo.classList.remove("filtro")
              :articulo.classList.add("filtro")
        })
  
    }
  
  
})


//SORTEO
class sorteo{
    constructor(nombreSorteo, apellidoSorteo, mailSorteo){
        this.nombreSorteo = nombreSorteo
        this.apellidoSorteo = apellidoSorteo
        this.mailSorteo = mailSorteo
    }

}

let arraySorteo = []

const formulario = document.getElementById("formulario")

formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    const nombreSorteo = document.getElementById("nombreSorteo")
    const apellidoSorteo = document.getElementById("apellidoSorteo")
    const mailSorteo = document.getElementById("mailSorteo") 
    const clienteSorteo = new sorteo(nombreSorteo.value, apellidoSorteo.value, mailSorteo.value)
    arraySorteo.push(clienteSorteo)
    console.log(arraySorteo)
    formulario.reset();
    alert("muchas gracias por anotarse!! le enviaremos mas informacion a su mail. ")
})








