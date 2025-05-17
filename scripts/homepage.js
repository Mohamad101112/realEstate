import { listings } from "../data/listings.js";

let lang = 'en';
const url = new URL(window.location.href);
 lang = url.searchParams.get('lang');

 console.log(lang);
if (lang === 'ar') {
  document.documentElement.setAttribute('dir', 'rtl');
//   document.documentElement.setAttribute('lang', 'ar');
} else {
  document.documentElement.setAttribute('dir', 'ltr');
//   document.documentElement.setAttribute('lang', 'en');lll
}
if(lang === "ar"){
    console.log('arabic');
}

const listingsGrid = document.querySelector('.listings__grid');
let html = ``;
listings.forEach((e) => {
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
})
listingsGrid.innerHTML = html;


const cards = document.querySelectorAll('.card');

cards.forEach((card)=>{
    const id = card.getAttribute('data-id');
    card.addEventListener("click",()=>{
        window.location.href = `property.html?id=${id}`;
    })

})


/*properties title */

const title = document.querySelector('.properties__title');
title.innerHTML = `${lang === 'ar' ? `جميع العقارات`:`All properties`}`
