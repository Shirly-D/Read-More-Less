var hide = document.querySelectorAll('.hide');
var text = document.querySelectorAll('.more');
var btn = document. querySelectorAll('.box-btn');
var para = document.querySelectorAll('p');
console.log(para);

var words = 0;

function read() {
    for (var i = 0; i < para.length; i++) {
        btn[i].addEventListener('click', function(e){
            if (!words) {
                text.classList.add("active");
                hide.classList.add('more');
                btn.innerHTML = "Read Less";
                words = 1;
                console.log(words);
            } else {
                hide.classList.add("active");
                btn.innerHTML = "Read More";
                text.classList.add('more');
                words = 0;
            }
    
        })
            }
    
    
}






















