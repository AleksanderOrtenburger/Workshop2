
document.addEventListener("DOMContentLoaded", function(){
    var next = document.querySelector('#nextPicture');
    var prev = document.querySelector('#prevPicture');
    var li = document.querySelectorAll('ul li')
    var realLi =[...li];
    counter=0;

    console.log(realLi);
    realLi[0].className = 'visible';
    next.addEventListener('click',function (event) {

        if(counter>=li.length-1 ){
            realLi[counter].classList.remove('visible');
            counter=0;
            realLi[counter].classList.add('visible');
            console.log(counter);


        }else{
            realLi[counter].classList.remove('visible');
            ++counter;
            realLi[counter].classList.add('visible');
            console.log(counter);

        }




    })
    prev.addEventListener('click',function (event) {

        if(counter<=0){
            realLi[counter].classList.remove('visible');
            counter=5;
            realLi[counter].classList.add('visible');
        }else{
            realLi[counter].classList.remove('visible');
            --counter;
            realLi[counter].classList.add('visible');
            console.log(counter);

        }




    })




});
