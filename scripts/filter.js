import { listings } from "../data/listings.js";
import { GenerateListingCard } from "./listingcards.js";



export function applyfilters(lang,company = '') {

const categoryFilter = document.getElementById('categoryFilter').value;
const typeFilter = document.getElementById('typeFilter').value;
const cityFilter = document.getElementById('cityFilter').value;
const maxPrice = document.getElementById('maxPriceFilter').value;


let filteredListings = [];

listings.forEach((e) => {

    if(typeFilter === 'all' || typeFilter === e.type){
      if(categoryFilter === 'all' || categoryFilter === e.category){
            if(maxPrice === "" || Number(e.price) <= Number(maxPrice)){
                if(cityFilter === 'all' || cityFilter === e.city){
                    if(company === '' || company === e.company){
                        filteredListings.push(e);
                    }
                }
              }
        }
    }

})

let listingsCounter = GenerateListingCard(lang,filteredListings);
console.log(listingsCounter);

if ( document.querySelector('.listingsCounter')){
    const listingsCounterElem =  document.querySelector('.listingsCounter');
    listingsCounterElem.innerHTML = `<h4>${lang === 'ar' ? `العقارات: `:`listings:`} ${listingsCounter}<h4>`;
}
/*this returns the listingscount */
return GenerateListingCard(lang,filteredListings);
}




export function generateFilters(lang) {
const filters = document.querySelector('.filtersContainer');
filters.innerHTML = `
        <select class="filters" id="categoryFilter">
          <option value="all">${lang === 'ar' ? `جميع الانواع`:`All Types`}</option>
          <option value="flat">${lang === 'ar' ? `شقة`:`Apartment`}</option>
          <option value="villa">${lang === 'ar'? `فيلا`:`Villa`}</option>
          <option value="furnished">${lang === 'ar'? `مفروش`:`furnished`}</option>
        </select>

          <select class="filters" id="typeFilter">
          <option value="all">${lang === 'ar' ? `للايجار و البيع`:`rent and sale`}</option>
          <option value="rent">${lang === 'ar' ? `للايجار`:`rent`}</option>
          <option value="sale">${lang === 'ar'? `للبيع`:`sale`}</option>
        </select>

          <select class="filters" id="cityFilter">
          <option value="all">${lang === 'ar' ? `جميع المدن`:`All cities`}</option>
          <option value="Jeddah">${lang === 'ar' ? `جده`:`Jeddah`}</option>
          <option value="Riyadh">${lang === 'ar' ? `الرياض`:`Riyadh`}</option>
          <option value="Medina">${lang === 'ar' ? `المدينة`:`Medinah`}</option>
          <option value="Mecca">${lang === 'ar' ? `مكة`:`Mecca`}</option>
          <option value="Khobar">${lang === 'ar' ? `الخبر`:`Khobar`}</option>
        </select>

        <select class="filters" id="maxPriceFilter">
          <option value="">${lang === 'ar' ? `أقصى سعر: غير محدد`:`Max price: unset`}</option>
          <option value="500000">${lang === 'ar' ? `أقصى سعر: 500,000`:`Max price: 500,000`}</option>
          <option value="700000">${lang === 'ar' ? `أقصى سعر: 700,000`:`Max price: 700,000`}</option>
        </select>
`;
}


export function generateSearchLinkAndSearch(lang,selection) {

  const typeFilterElem = document.getElementById('typeFilterHome').value;
  const cityFilterElem = document.getElementById('cityFilterHome').value;
  const maxPriceElem = document.getElementById('maxPriceFilterHome').value;


  let url =  `search.html?`;

  if (lang === 'ar'){
    url += `lang=ar&`;
  }

  url += `city=${cityFilterElem}&category=${typeFilterElem}&type=${selection}&maxprice=${maxPriceElem}`;
  console.log(url);

return url;
}