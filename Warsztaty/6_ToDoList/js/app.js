document.addEventListener('DOMContentLoaded', function() {

    var counter = 0;
    var addBtn = document.querySelector('#addTaskButton');
    var firstIn = document.querySelector('#taskInput');
    var secondIn = document.querySelector('#priorInput');
    var list = document.querySelector('#taskList');
    var remAll = document.querySelector('#removeFinishedTasksButton');
    var toDo= document.querySelector('#count');


    function unfinishedTaskNum(num) {
        return toDo.innerHTML = "" + num;
    }

    addBtn.addEventListener('click', function() {

        counter++;

        var li = document.createElement('li');
        var h1 = document.createElement('h1');
        var delButton = document.createElement('button');
        var comButton = delButton.cloneNode(false);

        h1.innerHTML = 'Task ' +counter+ ' : ' +firstIn.value;

        delButton.innerHTML = 'Delete';

        comButton.innerHTML = 'Complete';

        li.appendChild(h1);
        li.appendChild(delButton);
        li.appendChild(comButton);

        if(firstIn.value.length > 5 && firstIn.value.length < 100) {
            list.appendChild(li);
            firstIn.value = null;
        }

        function result() {
            var done = document.querySelectorAll('.done');
            return list.children.length - done.length;
        }

        unfinishedTaskNum(result());

        comButton.addEventListener('click', function() {
            this.parentElement.classList.toggle('done');
            h1.style.color='red';

            unfinishedTaskNum(result());
        });

        delButton.addEventListener('click', function() {
            li.parentElement.removeChild(li);

            unfinishedTaskNum(result());
        });


    });

    remAll.addEventListener('click', function() {

        var taskFin = document.querySelectorAll('.done');

        [...taskFin].forEach(function(el) {
            el.parentElement.removeChild(el);
        });

        unfinishedTaskNum(list.children.length);

    })

});
