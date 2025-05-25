import { listings } from "../data/listings.js";
import { GenerateNavbar } from "./navbar.js";
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



GenerateNavbar(lang,window.location.pathname)

applyFiltersSearch(lang,city,category,type,maxPrice);