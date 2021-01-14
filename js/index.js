const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


const navAs = document.querySelectorAll('nav a')
console.log(navAs)

navAs[0].textContent="Services"
navAs[1].textContent="Product"
navAs[2].textContent="Vision"
navAs[3].textContent="Features"
navAs[4].textContent="About"
navAs[5].textContent="Contact"

// document.querySelector('.logo-img').src ="img/logo.png"

// document.querySelector('.cta-img').src="img/header-img.png"
// const middleImg = document.querySelector('middle-img')

const firstH1=document.querySelector('h1')
const secondH1=document.createElement('h1')
const thirdH1=document.createElement('h1')
firstH1.textContent="DOM"
secondH1.textContent="IS"
thirdH1.textContent="Awesome"
firstH1.appendChild(secondH1)
firstH1.appendChild(thirdH1)
console.log(firstH1)

const buttonOne=document.querySelector('button').textContent="Get Started"

const headerImg=document.querySelector('.cta img').src='img/header-img.png'
console.log(headerImg)
// const ctaSect=document.querySelector('.cta')
// console.log(ctaSect)
// ctaSect.appendChild(headerImg)
// still working on getting the image to work.
const allH4=document.querySelectorAll('h4')
console.log(allH4)
allH4[0].textContent='Features'
allH4[1].textContent="About"
allH4[2].textContent='Services'
allH4[3].textContent='Product'
allH4[4].textContent='Vision'
allH4[5].textContent='Contact'

const allPs=document.querySelectorAll('p')
console.log(allPs)
allPs[0].textContent='Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
allPs[1].textContent='About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
allPs[2].textContent='Services conetent elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
allPs[3].textContent='Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
allPs[4].textContent='Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
allPs[5].textContent='123 Way 456 Street'
// still working out how to add another here, but i think i might have to redo the code?
allPs[6].textContent='1 (888) 888-8888'
allPs[7].textContent='sales@greatidea.io'
allPs[8].textContent='Copyright Great Idea! 2018'

document.querySelector('.middle-img').src='img/mid-page-accent.jpg'

navAs[0].style.color="green"
navAs[1].style.color="green"
navAs[2].style.color="green"
navAs[3].style.color="green"
navAs[4].style.color="green"
navAs[5].style.color="green"

const newNav1=document.createElement('a')
const newNav2=document.createElement('a')
newNav1.textContent="Uncle"
newNav2.textContent="Bob"
const allNavs=document.querySelector('nav')
allNavs.prependChild(newNav1)
allNavs.appendChild(newNav2)
// still working to get this working 