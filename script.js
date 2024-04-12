var cards = document.querySelectorAll('.card');

[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
    setTimeout(function(){
        let opened =document.querySelectorAll('.is-flipped');
        if (opened.length == 1){
            return
        } else {
            let firstCardContent = opened[0].innerHTML;
            let secondCardContent =opened[1].innerHTML;
            if (firstCardContent == secondCardContent){
                opened[0].remove();
                opened[1].remove();
            } else {
              opened[0].classList.toggle('is-flipped');
              opened[1].classList.toggle('is-flipped');
            }
        }
    },2000);
  });
});