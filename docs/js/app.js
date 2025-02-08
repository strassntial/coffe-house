const navbtn = document.getElementById("nav-btn");
const slidebar = document.getElementById("slidebar");

var n=0;
navbtn.addEventListener("click",function(){
    if (n == 1){
        slidebar.classList.remove("block"),
        slidebar.classList.add("hidden");
        navbtn.classList.remove("border-4");
        n=0;
    }else if(n == 0){
        slidebar.classList.remove("hidden"),
        slidebar.classList.add("block");
        navbtn.classList.add("border-4");
        n+=1;
    }
    
})


