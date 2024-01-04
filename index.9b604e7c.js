const e=document.getElementById("app");(async()=>{let t=await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=10"),a=await t.json(),s=a?.map(e=>`
    <article class="Card">
    <img  src="${e.images[0]}">
    <h2>
      ${e.title} <small>Precio $ ${e.price}</small></h2>
    </article>
    `).join(""),i=document.createElement("section");i.classList.add("Items"),i.innerHTML=s,e.appenChild(i)})();
//# sourceMappingURL=index.9b604e7c.js.map
