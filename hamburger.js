let menuBtn = document.querySelector('#hamburger')

menuBtn.addEventListener('click', () => {
    console.log('clicked button')
    menuBtn.classList.toggle('active')
})