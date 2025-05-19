import { listings } from "../data/listings.js";
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
GenerateListingCard(lang);

/*properties title */

const title = document.querySelector('.properties__title');
title.innerHTML = `${lang === 'ar' ? `جميع العقارات`:`All properties`}`
