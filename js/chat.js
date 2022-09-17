let chatSize = 1;

// Shows the question and the answer to the question
function showQuestionAndResponse() {
	showQuestion(this.innerHTML);
	getAnswer(this.value);
	//If the chat is too big it removes the last element
	const divChat = $("#chat-container");
	chatSize++;
	if (chatSize > 20) {
		divChat.removeChild(divChat.childNodes[0]);
		divChat.removeChild(divChat.childNodes[0]);
	}

	//Focuses on the chat options element
	window.focus();
	$("#chat-options")[0].scrollIntoView();
}

function setStoppedTrue() {
	stopped = true;
}

// Shows the response to the question
function getAnswer(questionId) {
	var response = "";
	switch (questionId) {
		case "email":
			response = $(`<p>Sure!</p>`);
			response.attr("class", "animation-typewritter");
			response.click(setStoppedTrue);
			showResponses(response);
			const form = $(`<form class="email-form">
				<div class="chat-right">
					<label for="name">Name:</label><br>
					<input type="text" name="name" placeholder="your name..." required><br><br>
					<label for="email">Email:</label><br>
					<input type="email" name="email" placeholder="your email..." required><br><br>
					<label for="message">Message:</label><br>
					<textarea name="message" placeholder="your message..." required></textarea><br><br>
				</div>
				<button class="chat-questions email-form-button" type="submit"><span>Send</span></button>
			</form>
			`);
			const cancelBtn = $(`<button class="chat-questions email-form-button"><span>Cancel</span></button>`);

			cancelBtn.click(() => {
				$("#chat-options").removeClass("display-none")
				$("#chat-options")[0].scrollIntoView();
				form.remove();
				cancelBtn.remove();
			})

			const divChat = $("#chat-container");
			divChat.append(form);
			divChat.append(cancelBtn);

			$(".chat-questions")[1].scrollIntoView();
			$("#chat-options").addClass("display-none");
			
			startTypeWritter();
			return
		case "aboutMe":
			response = $(`<p>Sure! So, my name is Daniel.
			<br><br>
			I am currently a software engineering student at <a href="https://www.epn.edu.ec/" target="_blank">EPN</a>. 
			I also have a part-time job as a team leader in a software company. I work with technologies like Odoo, Python, javascript, HTML, CSS, and more. 
			<br><br>
			Moving forward, I'd like to work with people across different industries and provide value to their companies.</p>`);
			response.attr("class", "animation-typewritter");
			response.click(setStoppedTrue);
			showResponses(response);
			startTypeWritter();
			return
		case "cv":
			response = $(`<p>You can download my CV from here <br>
			<a href="#"> <i class="fa-regular fa-file"></i> My CV in spanish</a><br>
			<a href="#"> <i class="fa-regular fa-file"></i> My CV in english</a></p>`);
			response.attr("class", "animation-typewritter");
			response.click(setStoppedTrue);
			showResponses(response);
			startTypeWritter();
			return
		case "projects":

			const responseNodes = [
				$(`<p>I currently work for Trescloud, where I have worked on projects of varying sizes. 
				Some big projects and some smaller ones. Unfortunately, I cannot disclose the details of those projects.</p>`),
				$(`<p>On the other hand, here is something I built a while back. 
				I designed and coded an e-commerce website using Figma, WordPress, and WooCommerce.</p>`),
				$(`<a href="#"><img class="chat-image" src="img/sublime_showcase.png"></img><br>learn more about sublime</a>`),
				$(`<p>aaand.. here is something more recent.</p>`),
				$(`<p>I designed and coded an android app using Figma for the design and Kotlin for the code.<br>`),
				$(`<a href="#"><img class="chat-image" src="img/bicyo_showcase.png"></img><br>learn more about Bicyo</a>`)
			]
			const responses = getResponses(responseNodes);
			responses[0].addClass("animation-typewritter");
			showResponse(responses[0]);
			
			typeWriter(responses[0], responses[0].html().split(" "), 120, 0, responses,0, callback = (nextElement) => {
				nextElement.addClass("animation-typewritter");
				showResponse(nextElement);
			});
			return
		case "socialMedia":
			response = $(`<p>Yes! Feel free to follow me.
			<br>
			<a href="https://github.com/DanielAlvarez02" target="_blank"><i class="fa-brands fa-github"></i> DanielAlvarez02</a>
			<br>
			<a href="https://www.linkedin.com/in/juan-daniel-alvarez/" target="_blank"><i class="fa-brands fa-linkedin"></i> juan-daniel-alvarez</a>
			</p>`);
			response.attr("class", "animation-typewritter");
			response.click(setStoppedTrue);
			showResponses(response);
			startTypeWritter();
			return
		default:
			response = $("<p>Feel free to ask me anything</p>");
			response.attr("class", "animation-typewritter");
			response.click(setStoppedTrue);
			showResponses(response);
			startTypeWritter();
			return
	}
}

//Creates the question and answer to a question
function showQuestion(questionText) {
	//Creates the right container div
	let questionPar = questionText;
	let questionDiv = $("<div>" + questionPar + "</div>");
	questionDiv.attr("class", "chat-right");

	//Appends the chat elements to the chat

	const divChat = $("#chat-container");
	divChat.append(questionDiv);
}

function getResponses(responseNodes){
	const responses = [];
	for(let i = 0; i < responseNodes.length; i++) {
		//Creates the left container div
		let responseDiv = $("<div></div>");
		responseDiv.attr("class", "chat-left");
		//Image is inserted
		const chatImage = $("<img></img>");
		chatImage.attr("src", "img/face-chat.png");
		chatImage.attr("class", "face-chat animate-talk");
		responseDiv.append(chatImage);
		responseDiv.append(responseNodes[i]);
		responses.push(responseDiv);
	}
	return responses;
}

// Shows the response to the question
function showResponses(responseNodes) {
	removeTypewritter();
	removeFaceChat();
	const responses = getResponses(responseNodes);
	responses.forEach((response) => {appendToChatContainer(response)});
}

function showResponse(responseNode) {
	removeTypewritter();
	removeFaceChat();
	appendToChatContainer(responseNode);
}

function appendToChatContainer(response) {
	const divChat = $("#chat-container");
	divChat.append(response);
}

function removeFaceChat() {
	Array.from($(".face-chat")).forEach((el) => {
		el.remove();
	});
}

function removeTypewritter() {
	Array.from(
		$(".animation-typewritter")
	).forEach((el) => {
		el.classList.remove("animation-typewritter");
	});
}

// Show question options
function showOptions() {
	$.getJSON("data/questions.json", function (questions) {
		const divChat = $("#chat-options");
		getAnswer("hi");
		startTypeWritter();
		//iterate through questions object	
		$.each(questions, function (key, value) {
			//The options button is created
			const button = $("<button><p>" + value + "</p></button>");
			button.attr("class", "chat-questions");
			button.attr("value", key);
			button.click(showQuestionAndResponse)

			//Button is appended to the chat
			divChat.append(button);
		});
		$("#chat-options")[0].scrollIntoView();
	})
}
