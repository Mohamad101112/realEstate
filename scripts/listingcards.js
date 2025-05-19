import { listings } from "../data/listings.js";

export function GenerateListingCard(lang,companyFilter = '') {

const listingsGrid = document.querySelector('.listings__grid');
let html = ``;      
let listingsCounter = 0;
listings.forEach((e) => {
    if(companyFilter === ''){
        console.log('fail');
            html += `
           <div class="card" data-id="${e.id}">
                       <img class="main_listing_img" src="${e.images[0]}" alt="">
                       <h3>${lang === 'ar' ? e.title.ar:e.title.en}</h3>
                       <div class="features">
                       <span class="beds">${e.features.bedrooms} <i class="fa-solid fa-bed"></i></span>
                       <span class="beds">${e.features.bathrooms} <i class="fa-solid fa-shower"></i></span>
                       </div>
                       <p><span class="sar">&#xE900;</span> ${e.price}  </p>
        
                   </div>
           `; 
    }else{
        if(e.company === companyFilter){
            listingsCounter++;
                        html += `
           <div class="card" data-id="${e.id}">
                       <img class="main_listing_img" src="${e.images[0]}" alt="">
                       <h3>${lang === 'ar' ? e.title.ar:e.title.en}</h3>
                       <div class="features">
                       <span class="beds">${e.features.bedrooms} <i class="fa-solid fa-bed"></i></span>
                       <span class="beds">${e.features.bathrooms} <i class="fa-solid fa-shower"></i></span>
                       </div>
                       <p><span class="sar">&#xE900;</span> ${e.price}  </p>
        
                   </div>
           `; 
        }
    }

})
listingsGrid.innerHTML = html;


const cards = document.querySelectorAll('.card');

cards.forEach((card)=>{
    const id = card.getAttribute('data-id');
    card.addEventListener("click",()=>{
        window.location.href = `property.html?${lang === 'ar' ? `lang=ar&`:``}id=${id}`;
    })

})

return listingsCounter;
}