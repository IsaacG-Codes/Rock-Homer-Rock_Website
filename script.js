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
function resizeImage(img) {
    img.style.width = "150px";
    img.style.height = "150px";
    }


function swap(argument) {
    var img1, img2;
    img1=document.getElementById('img1').src;
    img2=document.getElementById('img2').src;
    document.getElementById('img2').src=img1
    document.getElementById('img1').src=img2
    var caption, 
    


}





/*
 var img3, img4, img5, img6

img3=document.getElementById('img3').src;
    img4=document.getElementById('img4').src;
    img5=document.getElementById('img5').src;
    img6=document.getElementById('img6').src;
    **/

    /*var resizeImage(img) = swap {
    
}**/
    
    /*if swap(argument) {
        
    }**/