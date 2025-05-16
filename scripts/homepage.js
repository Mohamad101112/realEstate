import { listings } from "../data/listings.js";

const listingsGrid = document.querySelector('.listings__grid');
let html = ``;
listings.forEach((e) => {
     html += `
    <div class="card" data-id="${e.id}">
                <img class="main_listing_img" src="${e.images[0]}" alt="">
                <h3>${e.title.en}</h3>
                <div class="features">
                <span class="beds">${e.features.bedrooms} <i class="fa-solid fa-bed"></i></span>
                <span class="beds">${e.features.bathrooms} <i class="fa-solid fa-shower"></i></span>
                </div>
                <p><span class="t">&#xE900;</span> ${e.price}  </p>

            </div>
    `;
})
listingsGrid.innerHTML = html;


const cards = document.querySelectorAll('.card');

cards.forEach((card)=>{
    const id = card.getAttribute('data-id');
    card.addEventListener("click",()=>{
        window.location.href = `property.html?id=${id}`;
    })

})