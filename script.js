function changeImage(){
    document.querySelector('.box').computedStyleMap.color = 'blue';
}
var imgs=document.getElementsByTagName('img'); 

var init = 7;
console.log(imgs[5].src);
function changeLight(){
var target = document.getElementById('imaget');

var firstImage = imgs[0].src + "";
if(init < 9 ){
target.src = imgs[init].src;
init = init +1;

}
else{
init = 7;
target.src = imgs[init].src;
}
}
