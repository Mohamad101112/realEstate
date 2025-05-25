import { listings } from "../data/listings.js";
import { applyfilters, generateFilters, generateSearchLinkAndSearch } from "./filter.js";
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

function generateHeader() {
  document.querySelector('.typeSelected').innerHTML = `       
   <div class="search__All search__type search__type__selected">${lang === 'ar' ?`الكل` :`All`}</div>
        <div class="search__rent search__type">${lang === 'ar' ?`للايجار` :`For Rent`}</div>
        <div class="search__sale search__type ">${lang === 'ar' ?`للبيع` :`For Sale`}</div>
        `;


  document.querySelector('.search__filters').innerHTML = `
          <select class="filtersHome" id="typeFilterHome">
          <option value="all">${lang === 'ar' ? `جميع الانواع`:`All Types`}</option>
          <option value="flat">${lang === 'ar' ? `شقة`:`Apartment`}</option>
          <option value="villa">${lang === 'ar'? `فيلا`:`Villa`}</option>
        </select>

          <select class="filtersHome" id="cityFilterHome">
          <option value="all">${lang === 'ar' ? `جميع المدن`:`All cities`}</option>
          <option value="Jeddah">${lang === 'ar' ? `جده`:`Jeddah`}</option>
          <option value="Riyadh">${lang === 'ar' ? `الرياض`:`Riyadh`}</option>
          <option value="Medina">${lang === 'ar' ? `المدينة`:`Medinah`}</option>
          <option value="Mecca">${lang === 'ar' ? `مكة`:`Mecca`}</option>
          <option value="Khobar">${lang === 'ar' ? `الخبر`:`Khobar`}</option>
        </select>

          <select class="filtersHome" id="maxPriceFilterHome">
        <option value="">${lang === 'ar' ? `أقصى سعر: غير محدد`:`Max price: unset`}</option>
          <option value="500000">${lang === 'ar' ? `أقصى سعر: 500,000`:`Max price: 500,000`}</option>
          <option value="700000">${lang === 'ar' ? `أقصى سعر: 700,000`:`Max price: 700,000`}</option>
        </select>

          <button class="search__action">${lang === 'ar' ? `أبحث`: `Search`}</button>
`;



};
generateHeader();

generateSearchLinkAndSearch(lang);


  const searchAllElem = document.querySelector('.search__All');
  const searchRentElem = document.querySelector('.search__rent');
  const searchSaleElem = document.querySelector('.search__sale');

  let searchSelection = `all`;
  console.log(searchSelection);
  
  function toggleClasses(id){
    let list = [searchAllElem,searchRentElem,searchSaleElem];
    list.forEach((e)=>{
      if(id !== e){
        e.classList.remove('search__type__selected');
      }else{
        e.classList.add('search__type__selected');
      }
    })
  }
  
  searchAllElem.addEventListener('click',()=>{
    searchSelection = `all`;
        toggleClasses(searchAllElem);
  })
  
  searchRentElem.addEventListener('click',()=>{
    searchSelection = `rent`;
    toggleClasses(searchRentElem);
  })
  
  searchSaleElem.addEventListener('click',()=>{
    searchSelection = `sale`;
    toggleClasses(searchSaleElem);
  })


const searchElem = document.querySelector('.search__action');
searchElem.addEventListener("click",()=>{
  window.location.href = generateSearchLinkAndSearch(lang,searchSelection);
})




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
