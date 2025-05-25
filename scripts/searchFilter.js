import { listings } from "../data/listings.js";
import { GenerateListingCard } from "./listingcards.js";

 



export function applyFiltersSearch(lang,cityFilter = 'all',categoryFilter = 'all',typeFilter = 'all',maxPrice = '') {
console.log(cityFilter);

let filteredListings = [];

listings.forEach((e) => {

    if(typeFilter === 'all' || typeFilter === e.type){
        if(categoryFilter === 'all' ||categoryFilter === e.category){
            if(maxPrice === '' || Number(e.price) <= Number(maxPrice)){
                if(cityFilter === 'all' || cityFilter === e.city){
                   if(maxPrice === 'all' || e.price <= maxPrice){
                       console.log('filteredListings')
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