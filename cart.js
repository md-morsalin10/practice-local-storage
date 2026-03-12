const cartHandler = () =>{
    
    const productEl = document.getElementById("product")
    const quantityEl = document.getElementById("quantity")

    const product = productEl.value;
    const quantity = quantityEl.value;
    // console.log(product, quantity)

    displayProduct(product, quantity)

    productEl.value='';
    quantityEl.value='';
}

const displayProduct = (product, quantity)=>{
    const ul = document.getElementById("product-container")
    const li = document.createElement("li");
    li.innerText = `${product} : ${quantity}`
    
    ul.appendChild(li);
}