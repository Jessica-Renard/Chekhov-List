const enterButton = document.getElementById("enter");
const input = document.getElementById("userInput");
const ul = document.querySelector("ul");
const item = document.getElementsByTagName("li");
const wit = document.querySelector("#list-speak");

const dialog = [
    "The sea has neither meaning nor pity.",
    "We shall find peace. We shall hear the angels, we shall see the sky sparkling with diamonds.",
    "All of life and human relations have become so incomprehensibly complex... it becomes terrifying and your heart stands still.",
    "Knowledge is of no value unless you put it into practice.", 
    "Only entropy comes easy.",
    "I'm in mourning for my life.",
    "You must trust and believe in people or life becomes impossible."
    ];

function inputLength(){
	return input.value.length;
} 

function listLength(){
	return item.length;
}

function createListElement() {
	var li = document.createElement("li"); // creates an element "li"
	li.appendChild(document.createTextNode(input.value)); //makes text from input field the li text
	ul.appendChild(li); //adds li to ul
	input.value = ""; //reset text input field
    wit.innerText = dialog[(Math.floor(Math.random() * 7))];

    //START ADD CLASS DONE FOR li HIGHLIGHT
    function crossOut() {
		li.classList.toggle("done");
        wit.innerText = dialog[(Math.floor(Math.random() * 7))];
	}
 	li.addEventListener("click",crossOut);
	//END ADD CLASS AND LISTENER FOR li HIGHLIGHT


	//START ADD DELETE BUTTON
	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("&#10004;"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);
	//END ADD DELETE BUTTON


    //START ADD CLASS DELETE (DISPLAY: NONE)
	function deleteListItem(){
		li.classList.add("delete")
        wit.innerText = dialog[(Math.floor(Math.random() * 7))];
	}
	//END ADD CLASS DELETE
}

function addListAfterClick(){
	if (inputLength() > 0) { //makes sure that an empty input field doesn't create a li
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) { //looks to see if you hit "enter"/"return"
		//the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
		createListElement();
	} 
}

enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

/* maybe: add list length/duration conditions to unique quote content behaviors (such as a color flick, size throb.) 

*/
