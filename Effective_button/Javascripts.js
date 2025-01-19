const btnel = document.querySelector('.btn');
btnel.addEventListener('mouseover', (e) => {
    const x=e.pageX -btnel.offsetLeft;
    const y=e.pageY -btnel.offsetTop;
    btnel.style.setProperty('--posX', x +"px");
    btnel.style.setProperty('--posY', y +"px");
});