import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement =>Object =>HTMLElement(render)

const heading = React.createElement("h1", { id: "heading" }, "Namaste React🚀");
// JSX - HTML-like syntax
// jsx (Transpiled before it reaches the js) -PARCEL - Babel
// JSX => React.createElement => ReactElement - JS object =>HTMLELement(render)

//This below jsxHeading is a React Element
const elem = <span>React Element (passing the element into another element)<br/></span>
const jsxHeading = (
  <h1 id="heading">
    {elem}
    Namaste React using jsx🚀
  </h1> 
);

// React Functional Component   
const HeadingComponent = () => {
  return <h1>Namaste React Functional Component</h1>
}; 
const HeadingComponent2 = () => (
  <div className="container">
    {HeadingComponent()}
    {jsxHeading}
    <HeadingComponent/>
    <h1>Namaste React Functional Component TWO</h1>
  </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));

// rendering react element
root.render(jsxHeading);

// Rendering react component 
root.render(<HeadingComponent2 />)
