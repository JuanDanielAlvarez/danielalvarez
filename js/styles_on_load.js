window.onload=function() {
    document.getElementById("btn-box-call-to-action").className += 'animate-slide-up'
    document.getElementById("index-subtitle").className += 'animate-slide-up'
    
    chatWithMeButton = document.getElementById("chat-button-chat-with-me")
    hireMeButton = document.getElementById("cta-button-hire-me")
    indexTitle  = document.getElementById("index-title")
    indexSubtitle  = document.getElementById("index-subtitle")
    
    chatWithMeButton.addEventListener("click", function(){ 
            chatWithMeButton.className += ' animate-fly-right no-hover'
            hireMeButton.className += ' animate-fly-left'
            indexTitle.className += ' animate-fly-left'
            indexSubtitle.className += ' animate-fly-left'
        });

    hireMeButton.addEventListener("click", function(){ 
            chatWithMeButton.className += ' animate-fly-right'
            hireMeButton.className += ' animate-fly-left no-hover'
            indexTitle.className += ' animate-fly-right'
            indexSubtitle.className += ' animate-fly-right'
        });
    

};