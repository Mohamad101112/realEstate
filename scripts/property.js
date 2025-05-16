import { listings } from "../data/listings.js";

const url = new URL(window.location.href);
const id = url.searchParams.get("id");


/*find correct listing*/ 
let listing = listings.find((e)=>{
     return e.id === Number(id);
     });

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


console.log(listing);
const title = document.querySelector('.images');
title.innerHTML =   `<img src="${listing.images[0]}" class="property_image_main property__image__outer">
<img src="${listing.images[1]}" class="property_image_secondary property__image__outer">
<img src="${listing.images[2]}" class="property_image property__image__outer">
<img src="${listing.images[3]}" class="property_image property__image__outer">`;

const companycard = document.querySelector('.company');
companycard.innerHTML = `<a href="/${listing.company}">${listing.company}</a>`;


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