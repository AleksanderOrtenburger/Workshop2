document.addEventListener("DOMContentLoaded", function(){
    var body = document.querySelector('body');
    var li = document.querySelectorAll('ul li');
    var RealLi = [...li];
    console.log(body);
    console.log(li);
    RealLi.forEach(function (a) {
        var img = document.createElement('img');
        var button = document.createElement('button');
        var div = document.createElement('div');
        button.classList.add('close');
        button.innerText = 'Close';
        img.setAttribute('src','./images/wrong.png');
        div.classList.add('fullScreen');
        a.addEventListener('click',function (event) {

            div.appendChild(img);
            div.appendChild(button);
            body.appendChild(div);

            console.log(this.firstElementChild.getAttribute("src"));


        })
        button.addEventListener('click',function (event) {
            div.parentElement.removeChild(div);

        })


    })




});

/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */
