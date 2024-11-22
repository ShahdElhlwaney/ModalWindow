'use strict'
const modal= document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const btnsShowWindow=document.querySelectorAll('.show-window');
const btnCloseModal=document.querySelector('.close-modal');
const showModal= function (){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const closeModal= function (){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
for(let i=0;i<btnsShowWindow.length;i++)
{
    btnsShowWindow[i].addEventListener('click',showModal); 
}
btnCloseModal.addEventListener('click',closeModal);
overlay.addEventListener('click',closeModal);
document.addEventListener('keydown',function (e){
    if(e.key==='Escape' && !modal.classList.contains('hidden'))
    {
        closeModal();
    }
});