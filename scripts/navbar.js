export function GenerateNavbar(lang,url,id = ''){
const navbar = document.querySelector('.navbar');
    navbar.innerHTML =  `
    <div class="nav">
    <a class="logo" href="${lang === 'ar' ? `index.html?lang=ar`:`index.html`}">HOME|FINDER</a>


  <div class="links">

  <a href="${lang === 'ar' ? `index.html?lang=ar`:`index.html`}">
  ${lang === 'ar' ? `الصفحة الرئيسية`: `Home`}</a>

  <a href="#">${lang === 'ar' ? `للبيع`: `For sale`}</a>
  
  <a href="#">${lang === 'ar' ? `للايجار`: `For rent`}</a>
  
  <a href="#">${lang === 'ar' ? `تواصل معنا`: `contact us`}</a>
  
  <a class="lang__toggle" href="${url}${lang !== 'ar' ?
    `${id === '' ? `?lang=ar`:`?lang=ar&id=${id}`}`
    :
    `${id === '' ? ``:`?id=${id}`}`}
     ">

     ${lang === 'ar' ? 'En':'Ar'}</a>
  </div>
  </div>
    `;
}

export function GenerateNavbarForCompanies(lang,url,company) {
    const navbar = document.querySelector('.navbar');
    navbar.innerHTML =  `
    <div class="nav">
    <a class="logo" href="${lang === 'ar' ? `index.html?lang=ar`:`index.html`}">HOME|FINDER</a> 
  <div class="links">

    <a href="${lang === 'ar' ? `index.html?lang=ar`:`index.html`}">
  ${lang === 'ar' ? `الصفحة الرئيسية`: `Home`}</a>

  <a href="#">${lang === 'ar' ? `للبيع`: `For sale`}</a>
  
  <a href="#">${lang === 'ar' ? `للايجار`: `For rent`}</a>
  
  <a href="#">${lang === 'ar' ? `تواصل معنا`: `contact us`}</a>

  <a class="lang__toggle" href="${url}${lang !== 'ar' ? `?lang=ar&company=${company}`:`?company=${company}` }">${lang === 'ar' ? 'En':'Ar'}</a>  </div>
    </div>
    </div>
    `;
}

export function GenerateNavbarForSearch(lang,city,category,type,maxPrice){
  const navbar = document.querySelector('.navbar');
    navbar.innerHTML =  `
    <div class="nav">
    <a class="logo" href="${lang === 'ar' ? `index.html?lang=ar`:`index.html`}">HOME|FINDER</a>


  <div class="links">

  <a href="${lang === 'ar' ? `index.html?lang=ar`:`index.html`}">
  ${lang === 'ar' ? `الصفحة الرئيسية`: `Home`}</a>

  <a href="#">${lang === 'ar' ? `للبيع`: `For sale`}</a>
  
  <a href="#">${lang === 'ar' ? `للايجار`: `For rent`}</a>
  
  <a href="#">${lang === 'ar' ? `تواصل معنا`: `contact us`}</a>
  
  <a class="lang__toggle" href="${lang === 'ar' ? `search.html?city=${city}&category=${category}&type=${type}&maxprice=${maxPrice}`:`search.html?lang=ar&city=${city}&category=${category}&type=${type}&maxprice=${maxPrice}`}">
     ${lang === 'ar' ? 'En':'Ar'}</a>
  </div>
  </div>
    `;
}
/*if on homepage theres no id to be added to the url 
else add the id after the language in the url

for property page 
if its arabic it will have a simple url with an id and language 
else add the id only on a plain url (pathname) */



/************************************************************
 * you can use these functions instead
 */

function GenerateUrlForCompanyNav(lang,param1){
let url = ``;
if(lang === 'ar'){
  url += `?company=${param1}`;
}else{
  url += `?lang=ar&company=${param1}`;
}
}

function GenerateUrlForHomeNav(lang){
  let url = ``;
  if(lang === 'ar'){
    url += `?lang=ar`;
  }else{
    url += ``;
  }
}

function GenerateUrlForPropertyPage(lang,id) {
  let url = ``;
  if(lang === 'ar'){
    url += `?id=${id}`;
  }else{
    url += `?lang=ar&id=${id}`
  }
}