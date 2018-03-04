document.addEventListener("DOMContentLoaded", function(){
    var mainLi = document.querySelectorAll(".nav>ul>li");

    mainLi.forEach(function(el){
        el.style.cursor = "pointer";
        el.style.border = "1px solid grey";
        el.style.borderRadius = "5px";
        el.addEventListener("mouseover", function(event){
            var ul = el.querySelector("ul");
            ul.style.display = "block";

        });
        el.addEventListener("mouseout", function(event){
            var ul = el.querySelector("ul");
            ul.style.display = "none";

        });
    });

});