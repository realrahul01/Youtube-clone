let menuIcon = document.querySelector('.menu-icon');
let sidebar = document.querySelector('.sidebar');
let container = document.querySelector('.container')

menuIcon.onclick = function(){
    sidebar.classList.toggle('small-sidebar');
    container.classList.toggle('large-container');
}


let userIcon = document.querySelector('.user-icon')
let searchBox = document.querySelector('.search-box')

userIcon.onclick = function(){
    searchBox.classList.toggle('user-tt');
}