class HelloComponent extends HTMLElement {
  constructor() {
    super ();
    const shadow = this.attachShadow({ mode: "open"});
    const hello = document.createElement("div"); 
    hello.innerHTML = "<p>Hello!</p>";
    shadow.appendChild(hello);
  }
}


export default  HelloComponent;