const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is glorious text from JS file";

const para = document.createElement("p");
para.classList.add("red-text");
para.textContent = `Hey I'm red!`;
para.style.cssText = "color: red;";

const h3 = document.createElement("h3");
h3.classList.add("blue-text");
h3.textContent = "I'm a blue h3!";
h3.style.cssText = "color: blue;";

const div = document.createElement("div");
div.style.border = "1px solid black";
div.style.backgroundColor = "pink";

// div.style.cssText = "border: 1px solid black; background-color: pink;"; // Set multiple styles

const h1 = document.createElement("h1");
h1.textContent = "I'm in div!";

const p1 = document.createElement("p");
p1.textContent = "ME TOO!";

div.appendChild(h1);
div.appendChild(p1);

container.appendChild(content);
container.appendChild(para);
container.appendChild(h3);
container.appendChild(div);

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World 2");

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
  alert("Hello world 3");
});

function alertFunction() {
  alert("YAY you did it!");
}

const btnEvent = document.querySelector("#btnEvent");
// METHOD 2
// btnEvent.onclick = alertFunction;

// METHOD 3
btnEvent.addEventListener("click", alertFunction);
//callback functions are used to some more stuff like logging button attributes
btnEvent.addEventListener("click", function (e) {
  e.target.style.background = "blue";
  console.log(e);
});

//or more concise using arrow function
//btnEvent.addEventListener("click", (event) => console.log(event));

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  //   button.addEventListener("dblclick", (e) => {
  //     e.target.style.background = "yellow";
  //   });

  button.addEventListener("click", () => {
    alert(button.id);
  });
});
