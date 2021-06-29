const menuBtn = document.querySelector('.harmburger');
const sideNav = document.querySelector('.side-nav');
const wrapper = document.querySelector('.content-wrapper');
const title= document.querySelector('.tooltip');
menuBtn.addEventListener('click', () => {
    sideNav.classList.toggle('active');
    sideNav.classList.toggle('navLinks-active')
    
    wrapper.classList.toggle('active-wrapper')
})

// Modal
const modal = document.querySelector('.modal');
const closeModal= document.querySelector('.close-modal');
const admin = document.querySelector('.admin-profile');

admin.addEventListener('click',()=>{
    modal.classList.toggle('open')

})
closeModal.addEventListener('click',()=>{
    modal.classList.remove('open')
})