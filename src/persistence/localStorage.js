/* =====LOCAL STORAGE===== */
//Traer productos Local Storage
export const handleGetProductLocalStorage = () => {
    const products = JSON.parse(localStorage.getItem("products"));
    if (products) {
        return products;
    } else {
        return [];
    }
};

//Guardar en Local

//Recibir un Producto
export const setInLocalStorage = (productIn) => {
    if(productIn){
        //Traer los elementos
        let productsInLocal = handleGetProductLocalStorage();
        console.log(productIn);
        const existingIndex = productsInLocal.findIndex((productsLocal) =>
        productsLocal.id === productIn.id);
        //Comprobar si el producto ya existe
        if(existingIndex !== -1){
            //Si existe debe reemplazarse
            productsInLocal[existingIndex] = productIn;
        } else {
            //Si no existe debe agregarse
            productsInLocal.push(productIn);
        }
        //Setear el nuevo array
        localStorage.setItem("products", JSON.stringify(productsInLocal));
    }
};
