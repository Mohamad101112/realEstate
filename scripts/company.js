import { companies } from "../data/companies.js";
import { listings } from "../data/listings.js";
import { GenerateListingCard } from "./listingcards.js";
import { GenerateNavbar, GenerateNavbarForCompanies } from "./navbar.js";

const url = new URL(window.location.href);

const lang = url.searchParams.get('lang');
console.log(lang);

const company = url.searchParams.get('company');
console.log(company);

let companyObj;

companies.forEach((e)=>{
  if(e.name.en === company){
    companyObj = e;
  }
})

console.log(companyObj.obj);

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

GenerateNavbarForCompanies(lang,window.location.pathname,company);
const listingsCounter = GenerateListingCard(lang,company);
GenerateCompanyHeader();

function GenerateCompanyHeader() {
  let html =``;
const company =  document.querySelector('.company');
html = `
<div class="companyDetails">
        <div class="company__image">
            <img src="${companyObj.image}" alt="">
        </div>
        <div class="company__details">
            <h1>${lang === 'ar' ? companyObj.name.ar:companyObj.name.en}</h1>
            <p>${listingsCounter} ${lang === 'ar' ? `عقار`:`Listings`}</p>
            <div class="company__buttons">
                <a href="${companyObj.phone}" class="button">
                        <i class="fa-solid fa-phone"></i>  ${lang === 'ar' ? `اتصل`:`Call`}
                </a>
                <a href="${companyObj.email}" class="button">
                        <i class="fa-solid fa-envelope"></i> ${lang === 'ar' ? `البريد الالكتروني`:`Email`}    
                </a>
            </div>
        </div>
    </div>
`;

company.innerHTML = html;

}