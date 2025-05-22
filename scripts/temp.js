// let filtersElem = document.querySelector('.filters');
// filtersElem.innerHTML += `<div class="cityFilters">
// <a class="jeddah">jeddah</a>
// <a class="riyadh">Riyadh</a>
// <a class="dammam">dammam</a>
// </div>`;

// let filter = document.querySelectorAll('.filter');
// filter.forEach((e)=>{
//     e.addEventListener("click",() => {
//         GenerateListingCard(lang,'damac');
    
//     })
// })

let filteredIds = [];
let tempFilterContainer = [];

let flag = false;

if(companyfilter !== ''){
    if(companyfilter === e.company)
    filteredIds.push(e.id);
}
if(cityFilter !== ''){
    if(cityFilter === e.city){
        
        flag = false;
        
        filteredIds.forEach((filterid)=>{
            if(e.id === filterid){
                flag = true;
            }
        })

        if(flag){
            tempFilterContainer.push(e.id);
        }

    }
}
else{
        html += `
       <div class="card" data-id="${e.id}">
                   <img class="main_listing_img" src="${e.images[0]}" alt="">
                   <h3>${lang === 'ar' ? e.title.ar:e.title.en}</h3>
                   <div class="features">
                   <span class="beds">${e.features.bedrooms} <i class="fa-solid fa-bed"></i></span>
                   <span class="beds">${e.features.bathrooms} <i class="fa-solid fa-shower"></i></span>
                   </div>
                   <p><span class="sar">&#xE900;</span> ${e.price}  </p>
    
               </div>
       `; 
}

if(companyFilter === ''){
    filteredIds.push(e.id);
            
    //     html += `
    //    <div class="card" data-id="${e.id}">
    //                <img class="main_listing_img" src="${e.images[0]}" alt="">
    //                <h3>${lang === 'ar' ? e.title.ar:e.title.en}</h3>
    //                <div class="features">
    //                <span class="beds">${e.features.bedrooms} <i class="fa-solid fa-bed"></i></span>
    //                <span class="beds">${e.features.bathrooms} <i class="fa-solid fa-shower"></i></span>
    //                </div>
    //                <p><span class="sar">&#xE900;</span> ${e.price}  </p>
    
    //            </div>
    //    `; 
}else{
    if(e.company === companyFilter){

        listingsCounter++;
                    html += `
       <div class="card" data-id="${e.id}">
                   <img class="main_listing_img" src="${e.images[0]}" alt="">
                   <h3>${lang === 'ar' ? e.title.ar:e.title.en}</h3>
                   <div class="features">
                   <span class="beds">${e.features.bedrooms} <i class="fa-solid fa-bed"></i></span>
                   <span class="beds">${e.features.bathrooms} <i class="fa-solid fa-shower"></i></span>
                   </div>
                   <p><span class="sar">&#xE900;</span> ${e.price}  </p>
    
               </div>
       `; 
    }
}