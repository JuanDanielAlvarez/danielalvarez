let chatSize = 1;

function showQuestionAndResponse() {
	showQuestion(this.innerHTML);
	showResponse(getTestReponseInput());

	//If the chat is too big it removes the last element
	chatSize++;
	if (chatSize > 20) {
		divChat.removeChild(divChat.childNodes[0]);
		divChat.removeChild(divChat.childNodes[0]);
	}

	//Focuses on the chat options element
	window.focus();
	document.getElementById("chat-options").scrollIntoView();

	startTypeWritter();
}

//Creates the question and answer to a question
function showQuestion(questionText) {
	//Creates the right container div
	let questionPar = questionText;
	let questionDiv = document.createElement("div");
	questionDiv.setAttribute("class", "chat-right");
	questionDiv.innerHTML = questionPar;

	//Appends the chat elements to the chat
	divChat = document.getElementById("chat-container");
	divChat.appendChild(questionDiv);
}

function showResponse(responseNode) {
	//Creates the left container div
	let responseDiv = document.createElement("div");
	responseDiv.setAttribute("class", "chat-left");
	//Image is inserted
	const chatImage = document.createElement("img");
	chatImage.setAttribute("src", "img/face-chat.png");
	chatImage.setAttribute("class", "face-chat animate-talk");
	responseDiv.appendChild(chatImage);

	Array.from(
		document.getElementsByClassName("animation-typewritter")
	).forEach((el) => {
		el.classList.remove("animation-typewritter");
	});

	Array.from(document.getElementsByClassName("face-chat")).forEach((el) => {
		el.remove();
	});

	responseDiv.appendChild(responseNode);

	divChat = document.getElementById("chat-container");
	divChat.appendChild(responseDiv);
}

function getTestReponseInput() {
	const responseParagraph = document.createElement("p");
	const textNode = document.createTextNode("hola soy una respuesta");
	responseParagraph.appendChild(textNode);
	responseParagraph.setAttribute("class", "animation-typewritter");
	return responseParagraph;
}

function showOptions() {
	const questions = ["que haces", "te gusta el pan", "como estás", "jojojo"];
	var divChat = document.getElementById("chat-options");
	showResponse(getTestReponseInput());
	startTypeWritter();
	for (let i = 0; i < questions.length; i++) {
		//The options button is created
		const button = document.createElement("button");
		button.setAttribute("class", "chat-questions");
		button.addEventListener("click", showQuestionAndResponse);

		//Text is inserted
		const para = document.createElement("p");
		const textNode = document.createTextNode(questions[i]);
		para.appendChild(textNode);
		button.appendChild(para);

		//Button is appended to the chat
		divChat.appendChild(button);
	}
}
