document.addEventListener("DOMContentLoaded", function(){
    var tools = document.querySelectorAll(".tooltip");


    tools.forEach(function(element){
        var toolDis = document.createElement("span");
        toolDis.classList.add("tooltipText");
        element.appendChild(toolDis);
        toolDis.innerText = element.getAttribute("data-text");
        element.style.cursor = "pointer";
        toolDis.style.display = "none";
    });
       tools.forEach(function(element){
        element.addEventListener("mouseover", function(e){
            this.children[0].style.display = "block";
        });
        element.addEventListener("mouseout", function(e){
            this.children[0].style.display = "none";
        });
    });
});