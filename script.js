function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const dialogues = [
  "FullStack Flutter Developer",
  "I offer great services.",
  "Contact me for more information.",
  "Follow me on social media.",
];

let currentDialogueIndex = 0;
const dialogueElement = document.getElementById("dialogue");

function autoChangingDialogue() {
  dialogueElement.textContent = dialogues[currentDialogueIndex];
  currentDialogueIndex = (currentDialogueIndex + 1) % dialogues.length;
}

// Initial call to display the first dialogue
autoChangingDialogue();

// Change dialogue every 3 seconds
setInterval(autoChangingDialogue, 3000);
