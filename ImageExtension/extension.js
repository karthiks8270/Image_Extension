function adjustImageSize(img,newSize){
    const a = document.querySelectorAll('img');
    for(let i=0;i<a.length;i++){
        a[i].style.width='60px';
    }
    if(img){
        img.style.width=newSize;
    }
}

function Extensionimg(img) {
    adjustImageSize(img, "300px");
}

function origin() {
    adjustImageSize(null, "60px");
}
