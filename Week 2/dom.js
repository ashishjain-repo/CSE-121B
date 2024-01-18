const greenP = document.querySelector('.green');
const parentSection = greenP.closest('section');

const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const newP = document.createElement('p');
newP.textContent = "Hello World";