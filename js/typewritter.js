
var stopped = false;
var speed = 80;
function typeWriter(element, splitText = [], speed, currentIndex, twElements, currentElement, callback = (nextElement) => {}) {
	if (currentIndex <= splitText.length) {
		var subArray = splitText.slice(0, currentIndex);
		$(element).html(subArray.join(" "))
		currentIndex++;
		if(stopped || !$(element).hasClass("animation-typewritter")){
			stopped = false;
			$(element).html(splitText.join(" "))
		}
		else{
			setTimeout(typeWriter, speed, element, splitText, speed, currentIndex, twElements, currentElement, callback);
		}
	}else{
		currentElement++;
		if(currentElement < $(twElements).length){
			callback(twElements[currentElement]);
			typeWriter(twElements[currentElement], $(twElements[currentElement]).html().split(" "), speed, 1, twElements,currentElement, callback);
		}
	}
}

function startTypeWritter(callback = (nextElement) => {}) {
	twElements = $(".animation-typewritter").toArray()
	typeWriter(twElements[0], $(twElements[0]).html().split(" "), 120, 0, twElements,0,callback = (nextElement) => {})
}

