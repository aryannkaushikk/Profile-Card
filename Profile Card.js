document.querySelector("#more").addEventListener("click", function(){
    document.querySelector(".back").setAttribute("style","transform: rotateY(0deg)");
    document.querySelector(".front").setAttribute("style","transform: rotateY(180deg)");
})

document.querySelector("#AM").addEventListener("click", function(){
    document.querySelector(".front").setAttribute("style","transform: rotateY(0deg)");
    document.querySelector(".back").setAttribute("style","transform: rotateY(-180deg)");
})