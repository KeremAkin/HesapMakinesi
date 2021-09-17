const calcScreen = document.getElementById("screen");
let bir;
let iki = 0;
let islem = "topla";

function islemYap(sayi1, islem){
    switch(islem){
        case "topla" : 
            return parseInt(sayi1) + parseInt(calcScreen.innerText);
        case "bol" :
            return parseInt(sayi1) /     parseInt(calcScreen.innerText);
        case "cikar" :
            return parseInt(sayi1) - parseInt(calcScreen.innerText);
        case "carp" :
            return parseInt(sayi1) * parseInt(calcScreen.innerText);
    }
    

}

document.querySelector('.btn.clear').addEventListener('click', function() {
    bir = 0; iki =0;
    calcScreen.innerText = 0;
  });
  document.querySelector('.btn.bck').addEventListener('click', function() {
    str = calcScreen.innerText;
    if(str.length > 1){
    calcScreen.innerText = str.slice(0,str.length-1);
    }
    else
     calcScreen.innerText = 0;
  });

  document.querySelector('.btns').addEventListener('click', function(event) {
    
    if(event.target.innerText >= 0){
        if (calcScreen.innerText != 0){
            str = calcScreen.innerText.concat("",event.target.innerText);
            calcScreen.innerText = str;}
         else{
            calcScreen.innerText = event.target.innerText;
    }}});

    
    document.querySelector(".bol").addEventListener('click', function() {
    if (calcScreen.innerText != 0 ){

        bir = calcScreen.innerText;
        islem = "bol";
        calcScreen.innerText = 0;
    }
});
document.querySelector(".carp").addEventListener('click', function() {
    if (calcScreen.innerText != 0 ){

        bir = calcScreen.innerText;
        islem = "carp";
        calcScreen.innerText = 0;
    }
});document.querySelector(".cikar").addEventListener('click', function() {
    if (calcScreen.innerText != 0 ){

        bir = calcScreen.innerText;
        islem = "cikar";
        calcScreen.innerText = 0;
    }
});
document.querySelector(".topla").addEventListener('click', function() {
    if (calcScreen.innerText != 0 ){

        bir = calcScreen.innerText;
        islem = "topla";
        calcScreen.innerText = 0;
    }
});
document.querySelector(".esit").addEventListener('click', function() {
    if (calcScreen.innerText != 0 && bir != null ){

        calcScreen.innerText = islemYap(bir, islem);
        bir = 0;
    }
});