document.addEventListener("DOMContentLoaded", () => {
  let formInput = document.getElementById(".form");
  let submit = document.getElementById("button");
  let ul = document.getElementById("ul");
  let h4 = document.getElementById("err4");
  let userInput = document.getElementById("userInput");

  button.addEventListener("click", () => {
    event.preventDefault();
    debugger;
    h4.innerHTML = " ";
    debugger;
    let newNode = document.createElement("li");
    newNode.innerText = userInput.value;
    let errorMsg = document.createElement("p");
    errorMsg.innerText = "Error! Da Wrongs happens! Please enter agains!";
    if (userInput.value.length === 0) {
      h4.appendChild(errorMsg);
    } else {
      ul.appendChild(newNode);
      form.reset();
    }
  });
  ul.addEventListener("click", event => {
    event.target.style.textDecoration = "line-through";
  });
});
