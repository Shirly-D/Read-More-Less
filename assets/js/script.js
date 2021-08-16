var text = document.querySelectorAll('.more');
var btn = document. querySelectorAll('.box-btn');
var list = document.querySelectorAll('.read-list');

for (var i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function(e){
        var current = e.target;
        var readMore = current.className.includes('box-btn');
        console.log(current);
        console.log(readMore);
        if (!readMore){ 
            return;
        }
        console.log(list[i]);
        console.log(list.length);
        var currentText = e.target.parentNode.parentNode.querySelector('.more');
        console.log(currentText);
        currentText.classList.toggle('active');
        current.textContent = current.textContent.includes('read more') ? 'read less' : 'read more';
        // currentText.classList.remove('more');
        console.log(current.textContent);
    })
    
}



















