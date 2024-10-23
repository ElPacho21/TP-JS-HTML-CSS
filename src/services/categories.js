/* =====CATEGORIAS===== */

import { categoriaActiva } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localStorage";
import { handleRenderList } from "../views/store";

const handleFilterProductsByCategory = (categoryIn) =>{
    const products = handleGetProductLocalStorage();
    switch (categoryIn) {
        case categoriaActiva:
                handleRenderList(products);
            break;
        case "Todo":
            handleRenderList(products);
            break;
        case "Hamburguesas":
        case "Papas":
        case "Gaseosas":
            const result = products.filter((el) => el.categoria === categoryIn);
            handleRenderList(result);
            break;
        case "mayorPrecio":
            const resultPrecioMayor = products.sort((a,b) => b.price - a.price);
            handleRenderList(resultPrecioMayor);
            break;
        case "menorPrecio": 
        const resultPrecioMenor = products.sort((a,b) => a.price - b.price);
        handleRenderList(resultPrecioMenor);
            break;
        default:
            break;
    }
};

//Render de la vista categorias

export const renderCategories = ()=>{

    const ulList = document.getElementById("listFilter");
    ulList.innerHTML = `
    <li id="Todo">Todos los Productos</li>
    <li id="Hamburguesas">Hamburguesas</li>
    <li id="Papas">Papas</li>
    <li id="Gaseosas">Gaseosas</li>
    <li id="mayorPrecio">Mayor Precio</li>
    <li id="menorPrecio">Menor Precio</li>
    `;

    const liElements = ulList.querySelectorAll("li");
    liElements.forEach((liElement) =>{
        liElement.addEventListener("click", () =>{
            handleClick(liElement);
        });
    });

    const handleClick = (elemento) =>{
        handleFilterProductsByCategory(elemento.id)
        liElements.forEach((el)=>{
            if(el.classList.contains("liActive")){
                el.classList.remove("liActive")
            } else if(elemento === el){
                el.classList.add("liActive");
            }
        });

    }
}