// responsive navbar
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    navBar = document.querySelector(".nav-menu");
    navBar.classList.toggle("active");
}

// progress bar
let progressBar = document.querySelector(".progress");
let progressContainer = document.querySelector(".progress-container");


let progressValue = 0
let progressEndValue = 80
let speed = 50

let progress = setInterval(() => {
    progressValue++;
    progressContainer.textContent = `${progressValue}%`;
    progressBar.style.background = `conic-gradient(
        #379fff ${progressValue * 3.6}deg,
        #b7d6ec ${progressValue * 3.6}deg
    )`;
    if (progressValue == progressEndValue) {
        clearInterval(progress);
    }
}, speed);



//CHAT PAGE
// TEXTAREA
const chatInput = document.querySelector(".chat-input textarea");
// SEND BUTTON
const sendChatBtn = document.querySelector(".chat-input span");
const clearBtn = document.getElementById("clear-btn");
const chatBox = document.querySelector(".chats");


let userMessage;


const createChatLi = (message, className) => {
    // create a chat li element with passed message and className
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<span><i class="far fa-calendar-minus"></i></span><p>${message}</p>`;
    chatLi.innerHTML = chatContent;
    return chatLi;
    
}

const generateResponse = () => {

}



const handleChat = () => {
    userMessage = chatInput.value.trim();
    if(!userMessage) return;
    chatInput.value = "";

    chatOutgoing = chatBox.appendChild(createChatLi(userMessage, "outgoing")) 
    setTimeout(() => {
        chatIncoming = chatBox.appendChild(createChatLi("Loading...", "incoming")) 
        generateResponse();
    }, 600);

    
}

sendChatBtn.addEventListener('click', handleChat);


