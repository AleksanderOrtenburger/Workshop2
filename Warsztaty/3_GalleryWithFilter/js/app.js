document.addEventListener("DOMContentLoaded", function(){
    var img = document.querySelectorAll('img');
    var realImg = [...img];
    var show = document.querySelector('#showButton');
    var hide = document.querySelector('#hideButton');
    var tagIn = document.querySelector('input');
    var showIn= tagIn.value;




    show.addEventListener('click', function (event) {
        var inVal = tagIn.value;
        tagIn.value = "";

        if(inVal.length > 0){
            realImg.forEach(function (el) {
                var dataset = el.dataset.tag;
                var Src = dataset.indexOf(inVal);
                if(Src !== -1){
                    el.removeAttribute("class", "invisible");
                };
            });
        }
    });

    hide.addEventListener('click', function (event) {


        var inVal = tagIn.value;
        tagIn.value = "";

        if(inVal.length > 0){

            realImg.forEach(function (el) {
                var dataset = el.dataset.tag;
                var Src = dataset.indexOf(inVal);
                if(Src !== -1){
                    el.setAttribute("class", "invisible");
                };
            });
        };
    });



})





