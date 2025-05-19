import { companies } from "../data/companies.js";
import { listings } from "../data/listings.js";
import { GenerateNavbar } from "./navbar.js";

const url = new URL(window.location.href);
const id = url.searchParams.get("id");

let lang = 'en';
lang = url.searchParams.get('lang');

if (lang === 'ar') {
  document.documentElement.setAttribute('dir', 'rtl');
  document.documentElement.setAttribute('lang', 'ar');
} else {
  document.documentElement.setAttribute('dir', 'ltr');
  document.documentElement.setAttribute('lang', 'en');
}

if(lang === "ar"){
    console.log('arabic');
}

/*find correct listing*/ 
let listing = listings.find((e)=>{
     return e.id === Number(id);
     });


/*getting company object */
let companyObj;
companies.forEach((e)=>{
    if(e.name.en === listing.company){
        companyObj = e;
    }
})
/*count listings in company */
let listingCounter = 0;
listings.forEach((e)=>{
    if(e.company === companyObj.name.en){
        listingCounter++;
    }
})

/*render navbar*/
GenerateNavbar(lang,window.location.pathname,id);



/*modalImages*/
const modalImages = document.querySelector('.modal__content');
let html = ``;
    listing.images.forEach((e)=>{
        html += `<img class="property__image" src="${e}">`;
     })

         listing.images.forEach((e)=>{
        html += `<img class="property__image" src="${e}">`;
     })
modalImages.innerHTML = html;



/*listing images*/
console.log(listing);
const title = document.querySelector('.images');
title.innerHTML =   `<img src="${listing.images[0]}" class="property_image_main property__image__outer">
<img src="${listing.images[1]}" class="property_image_secondary property__image__outer">
<img src="${listing.images[2]}" class="property_image property__image__outer">
<img src="${listing.images[3]}" class="property_image property__image__outer">`;



/*content*/
const description = document.querySelector('.description');
description.innerHTML = `<h3><span class="sar">&#xE900;</span>${listing.price}</h3>
            <h4 >Al salamah,north jeddah,jeddah</h4>
            <div class="features">
            ${GeneratePropertyMainFeatures()}
            </div>
            <h4>Luxury apartment for sale</h4>
            <span>
            ${lang === 'ar' ? listing.description.ar:listing.description.en}
            </span>`;



 /*this generates the main features like size bedrooms and bathrooms */
function GeneratePropertyMainFeatures(){
    let features = ``;
    if(listing.features.area){
               features += `<span class="beds">${listing.features.area} <i class="fa-solid fa-house"></i></span>`
    }
    if(listing.features.bedrooms){
        console.log('success');
        features +=  `<span class="beds">${listing.features.bedrooms} <i class="fa-solid fa-bed"></i></span>`
    }if(listing.features.bathrooms){
       features += `<span class="beds">${listing.features.bathrooms} <i class="fa-solid fa-shower"></i></span>`
        console.log('success');
    }
    return features;
}



// /*company card */
GenerateCompanyCard();
function GenerateCompanyCard() {

    const companycard = document.querySelector('.company');
    companycard.innerHTML = `
                    <div class="companyDetails">
                          <div class="company__image">
                               <img src="${companyObj.image}" alt="">
                           </div>
                         <div class="company__details">
                              <h1>${lang === 'ar' ? companyObj.name.ar:companyObj.name.en}</h1>
                                <p>${listingCounter} Listings</p>
                         <div class="company__buttons">
                              <a href="${companyObj.phone}" class="button--primary">
                                <i class="fa-solid fa-phone"></i> ${lang === 'ar' ? `اتصل`:`Call`}</a>
                            <a href="${companyObj.email}" class="button--primary">
                                    <i class="fa-solid fa-envelope"></i> ${lang === 'ar' ? `البريد الالكتروني`:`Email`}</a>
                          </div>
                        </div>
                 </div>
                 <hr>
                 <a class="button--primary" href="${lang === 'ar' ? `company.html?lang=ar&company=${companyObj.name.en}`:
                    `company.html?company=${companyObj.name.en}`}">See All Listings</a>
    `;

}


/*added eventlistener on property images to open modal*/ 
const propertyImage = document.querySelectorAll('.property__image__outer');
propertyImage.forEach((img)=>{
    img.addEventListener("click",()=>{
        openPopup();
    })
})

function openPopup() {
        document.querySelector('.popup').classList.remove('hidden');
}
/* added cosing functionality in modal */

const closeModal = document.querySelector('.closeModal');

function closePopup() {
    document.querySelector('.popup').classList.add('hidden');
}

closeModal.addEventListener("click", ()=>{
    closePopup();
})