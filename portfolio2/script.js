//Dark/Light Mode
const themeBtn=document.getElementById('themeBtn');
const body= document.body;

themeBtn.addEventListener('click,'()=> {
    body.classList.toggle('dark-mode');

    if(body.classList.contains('dark-mode')) {
        themeBtn.textContent='Light';
        body.style.backgroundcolor='#111';
        body.style.color='white';
    } else{
        themeBtn.textContent='Dark';
        body.style.backgroundColor='white'
        body.style.color='black';
    }
});

//welcome message
window.addEventListener('load',()=>{
    console.log(Welcome to Tobi Motors!);
});

//Make images zoom when clicked
const allImges=document.querySelectorAll('img');
allImages.forEach(img=>{
    img.addEventListener('click',()=>{
        img.style.transform==='scale(1.5)'?'scale(1)': 'scale'(1.5)';
        img.style.transition='0.3s';
        img.style.zIndex='10';
    });
});