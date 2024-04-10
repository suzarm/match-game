var cards = document.querySelectorAll('.card');

[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
    setTimeout(function(){
        let opened =document.querySelectorAll('.is-flipped');
        if (opened.length == 1){
            return
        } else {
            let firstCardContent = opened[0].innerText;
            let secondCardContent =opened[1].innerText;
            console.log(firstCardContent);
            console.log(secondCardContent);
            if(firstCardContent == secondCardContent){
                opened[0].remove()
                opened[1].remove()
            }else{
                
            }
        }
    },100);
    
  });
});