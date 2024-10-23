// let commerce = fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=>console.log(json))
const fetchProducts = async () =>{
    let url = "https://fakestoreapi.com/products";
    try{
        let response = await fetch(url);
//it will return a promise which we will have to await
        let responseData = await response.json();
        return responseData;
    }catch(error){
        console.log(error);
    }
}

async function displayData() {
    const products = await fetchProducts()
    let productContainer = document.getElementById("product-container")
    productContainer.innerHTML = products.map((product)=>{
        const {category,description,id,image,price,rating,title} = product;
        return `
        <div class="product-items">
        <h4>${category}</h4>
        <div class="product-card">
        <img src="${image}" class="image">
        <h3>${title}</h3>
        <span class="id">${id}</span> <span class="price">${price}</span>
        <p class="desc">${description}</p>
        <div class="rating">
        ${rating}
        </div>
        </div>
        </div>
        `
    })
}
displayData()