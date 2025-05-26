import { listings } from "../data/listings.js";
import { GenerateListingCard } from "./listingcards.js";


export function applyFiltersSearch(lang,cityFilter,categoryFilter,typeFilter ,maxPrice = '') {
console.log(cityFilter);

let filteredListings = [];

listings.forEach((e) => {

    if(typeFilter === 'all' || typeFilter === e.type){
        if(categoryFilter === 'all' ||categoryFilter === e.category){
            if(maxPrice === '' || Number(e.price) <= Number(maxPrice)){
                if(cityFilter === 'all' || cityFilter === e.city){
                   if(maxPrice === '' || e.price <= maxPrice){
                       console.log('filteredListings')
                       filteredListings.push(e);
                   }
                }
        }
    }
}

})

/*this returns the listingscount */
// let listingsCounter = GenerateListingCard(lang,filteredListings);
// console.log(listingsCounter);
let counter = 0;
filteredListings.forEach((e)=>{
counter++;
})

if ( document.querySelector('.listingsCounter')){
    const listingsCounterElem =  document.querySelector('.listingsCounter');
    listingsCounterElem.innerHTML = `<h4>${lang === 'ar' ? `العقارات: `:`listings:`} ${counter}<h4>`;
}

GenerateListingCard(lang,filteredListings);
return counter;

}