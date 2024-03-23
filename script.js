const heading = document.createElement("h1");
heading.innerHTML = "Hello From JS" ;
const root = document.getElementById("root");
root.appendChild(heading);

const heading2 = React.createElement("h1",{},"Hello React");
console.log(heading2);
const root2 = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading2);