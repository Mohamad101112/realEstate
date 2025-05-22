import { listings } from "../data/listings.js";
import { applyfilters, generateFilters } from "./filter.js";
import { GenerateListingCard } from "./listingcards.js";
import { GenerateNavbar } from "./navbar.js";

let lang = 'en';
const url = new URL(window.location.href);
 lang = url.searchParams.get('lang');
 console.log(window.location.href);

function langIsRtl(){
  if (lang === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', 'ar');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
    document.documentElement.setAttribute('lang', 'en');
  }
}
langIsRtl();    


/*navbar render*/

GenerateNavbar(lang,window.location.pathname);


/* */
generateFilters(lang);
GenerateListingCard(lang,listings);
applyfilters(lang);






/*event listeners for filters */
document.getElementById('typeFilter').addEventListener('change',()=>{
  applyfilters(lang);
});

document.getElementById('cityFilter').addEventListener('change',()=>{
  applyfilters(lang);
});

document.getElementById('maxPriceFilter').addEventListener('change',() => {
  applyfilters(lang);
  
});


/*properties title */

const title = document.querySelector('.properties__title');
title.innerHTML = `${lang === 'ar' ? `جميع العقارات`:`All properties`}`;
console.log(title.innerHTML);
