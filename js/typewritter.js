document.addEventListener("DOMContentLoaded", function() {
  
  var speed = 80;
  
/*
  function typeWriter(e, txt, i) {
    if ((i-1)*2 <= txt.length) { 
      console.log(e)
      e.innerHTML = txt.slice(0 , i * 2);
      i++
      setTimeout(typeWriter, speed, e, txt, i);
    }
  }
*/
  function typeWriter(element, splitText = [], speed, i) {
    if (i <= splitText.length) {
      var subArray = splitText.slice(0,i);
      console.log(subArray)
      element.innerHTML = subArray.join(" ");
      i++;
      setTimeout(typeWriter, speed, element,splitText, speed,i);
    }
  }

  function startTypeWritter(){
    twElements = document.getElementsByClassName("animation-typewritter");
    for(var j = 0; j< twElements.length; j++){
      typeWriter(twElements[j],twElements[j].innerHTML.split(" "),120,0)
    }
  }
  setTimeout(startTypeWritter, 0);
});
