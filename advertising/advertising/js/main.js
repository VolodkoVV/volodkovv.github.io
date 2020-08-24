  window.onload = function(){
    let btn = document.querySelector('.btn-mob');
    let list = document.querySelector('.drop-list');
 
    btn.addEventListener('click', function(){
        list.classList.toggle('hidden');
    });
 }