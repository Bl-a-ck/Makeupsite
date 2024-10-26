let simpleProducts=[  
    {  
        title: "Essence Mascara Lash Princess",  
        thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"  
    },  
    {  
        title: "Eyeshadow Palette with Mirror",  
        thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png"  
    },  
    {  
        title: "Powder Canister",  
        thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png"  
    },  
    {  
        title: "Red Lipstick",  
        thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png"  
    },  
    {  
        title: "Red Nail Polish",  
        thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/thumbnail.png"  
    },
    {  
        title: "Red Nail Polish",  
        thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/thumbnail.png"  
    } 
]

let div1= document.querySelector(".mainol")

simpleProducts.map(product => {
    let li = document.createElement("li");

    let img = document.createElement("img");
    img.src = product.thumbnail;
    img.alt = product.title;

    let title = document.createElement("p");
    title.textContent = product.title;
    title.style.fontSize = "20px"
    title.style.textAlign = "center"
    title.style.color = `rgb(186, 58, 58)`;

    li.appendChild(img);
    li.appendChild(title);

    div1.appendChild(li);
});


// simpleProducts.map((product) => {
//     ol1.innerHTML += `
//     <li>${step} 
//     </li>`
// })