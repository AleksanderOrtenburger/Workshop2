document.addEventListener("DOMContentLoaded", function(){

    var li = document.querySelector('#gallery').children;
    var RealLi = [...li];
    console.log(RealLi);
    RealLi.forEach(function (a) {
        console.log(a.dataTag);

    })

    var show = document.querySelector('#showButton');
    var hide = document.querySelector('#hideButton');
    var tagIn = document.querySelector('#tagInput');
    var showIn= tagIn.value;

    show.addEventListener('click',function (event) {


        console.log(showIn);


        });


        

    hide.addEventListener('click',function (event) {
        showIn='';


    });

})





