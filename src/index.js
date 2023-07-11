import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>hello world</h1>
<button id="my-button">Button</button>
<ul id="my-list"></ul>
<button id="add-data">Add data</button>
<textarea id="textarea"></textarea>
 `;

// change the text inside the <h1> tag
document.getElementById("my-button").addEventListener("click", function () {
  console.log("hello world");
  document.querySelector("h1").innerText = "My notebook";
});

// custom text to list
document.getElementById("add-data").addEventListener("click", function () {
  const text = document.getElementById("textarea").value;
  const list = document.createElement("li");
  list.innerText = text;
  document.getElementById("my-list").appendChild(list);
});
