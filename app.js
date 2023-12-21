const headingReact = React.createElement(
  "div",
  { class: "headingDiv" },
  [
    React.createElement("div", {}, [
      React.createElement("h1", { class: "content" }, "I am h1 tag"),
      React.createElement("h1", { class: "content" }, "I am h1 tag"),
    ]),
  React.createElement("div", {}, [
    React.createElement("h1", { class: "content" }, "I am h1 tag"),
    React.createElement("h1", { class: "content" }, "I am h1 tag"),
  ])]
);

const headingRoot = ReactDOM.createRoot(document.getElementById("headingRoot"));
headingRoot.render(headingReact);
