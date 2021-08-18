// setTimeout(function(){
//     alert('hi')
// },1000)
// setInterval(() => {
//     alert('hello')
// }, 2000);
window.addEventListener('DOMContentLoaded', function (){
    let loaded = document.querySelector('.loader')
    setTimeout(() => {
        loaded.style.opacity = '0'
        setTimeout(() => {
            loaded.style.display = 'none'
        }, 500)
    }, 2000);
})



