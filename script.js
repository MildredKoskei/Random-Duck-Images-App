const FoxAPI = "https://randomfox.ca/floof"
const h2 = document.createElement("h2");
h2.textContent = "javascript content";
document.querySelector("body").appendChild(h2);


fetch(FoxAPI)
.then(resp => resp.json())
.then(data=> console.log(data))
