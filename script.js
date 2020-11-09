

document.getElementById ("section-omne-btn").addEventListener("click",function(){
    showDrop();
    
});



document.getElementById ("section-hry-btn").addEventListener("click",function(){
    Myscroll("section-hry");
});


   

document.getElementById ("zakladka-btn").addEventListener("click",function(){
    Myscroll("zakladka");
});
document.getElementById ("zakladka-btn2").addEventListener("click",function(){
    Myscroll("zakladka");
    showMenu();
});


document.getElementById ("stredna-btn").addEventListener("click",function(){
    Myscroll("stredna");
});
document.getElementById ("stredna-btn2").addEventListener("click",function(){
    Myscroll("stredna");
    showMenu();
});

document.getElementById ("vysoka-btn").addEventListener("click",function(){
    Myscroll("vysoka");
});
document.getElementById ("vysoka-btn2").addEventListener("click",function(){
    Myscroll("vysoka");
    showMenu();

});


var menuVisible = false;

document.getElementById("menu").addEventListener("click",showMenu)
    

document.getElementById ("section-header-btn").addEventListener("click",function(){
    const offset = 65;
    const element = document.getElementById('section-header');
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const elementOffset = elementPosition + offset;

window.scrollTo({
    top: elementOffset,
      behavior: 'smooth'
});
showMenu();
});

function showMenu(){
    if (!menuVisible && window.innerWidth<601){
         document.getElementsByTagName("div")[1].setAttribute("class", "visible"); 
         document.getElementsByTagName("div")[2].setAttribute("class", "visible"); 
         document.getElementsByTagName("div")[4].setAttribute("class", "visible"); 
         menuVisible= true;
     }
    else if (menuVisible && window.innerWidth<601) {
     document.getElementsByTagName("div")[1].setAttribute("class", "dropdown"); 
     document.getElementsByTagName("div")[2].setAttribute("class", "dropdown"); 
     document.getElementsByTagName("div")[4].setAttribute("class", "dropdown"); 
     menuVisible = false;
    }
}

function Myscroll(elemId){
    const element = document.getElementById(elemId);

    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    window.scrollTo({
  top: elementPosition,
  behavior: 'smooth'
});
showMenu();
}

var dropShow = false;
function showDrop(){
    if (!dropShow && window.innerWidth<601){
        document.getElementsByTagName("div")[3].setAttribute("class", "dropdown-visible"); 
        dropShow=true;
    }
    else if (dropShow && window.innerWidth<601){
        document.getElementsByTagName("div")[3].setAttribute("class", "dropdown-content"); 
        dropShow=false;
    }
}

