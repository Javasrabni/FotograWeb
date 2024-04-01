let navHome = document.getElementById("Home");
let navAbout = document.getElementById("About");
let navGallery = document.getElementById("Gallery");

navHome.classList.add("ActiveIdle")

navHome.addEventListener('click', ()=> {
    navHome.classList.add("active")
    navAbout.classList.remove('active')
    navGallery.classList.remove("active")
})

navAbout.addEventListener('click', ()=> {
    navAbout.classList.add("active")
    navGallery.classList.remove('active')
    navHome.classList.remove("active", "ActiveIdle")

})
navGallery.addEventListener('click', ()=> {
    navGallery.classList.add("active")
    navAbout.classList.remove('active')
    navHome.classList.remove("active", "ActiveIdle")
})