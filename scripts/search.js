import { listings } from "../data/listings.js";
import { applyfilters, generateFilters } from "./filter.js";
import { GenerateNavbar, GenerateNavbarForSearch } from "./navbar.js";
import { applyFiltersSearch } from "./searchFilter.js";

const url = new URL(window.location.href);

let lang = url.searchParams.get('lang');
let city = url.searchParams.get('city');
let type = url.searchParams.get('type');
let category = url.searchParams.get('category');
let maxPrice = url.searchParams.get('maxprice');
// let city = url.searchParams.get('city');

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




generateFilters(lang);

applyFiltersSearch(lang,city,category,type,maxPrice);

GenerateNavbarForSearch(lang,city,category,type,maxPrice);

// document.getElementById('typeFilter').ariaValueMax = type;

document.getElementById('typeFilter').addEventListener('change',()=>{
  applyfilters(lang);
});

document.getElementById('cityFilter').addEventListener('change',()=>{
  applyfilters(lang);
});

document.getElementById('maxPriceFilter').addEventListener('change',() => {
  applyfilters(lang);
});

document.getElementById('categoryFilter').addEventListener('change',() => {
  applyfilters(lang);
});