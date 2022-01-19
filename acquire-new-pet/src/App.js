const Pet = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Luna"),
    React.createElement("h2", {}, "Dog"),
    React.createElement("h2", {}, "Havanes"),
  ]);
}

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Acquire new Pet"),
    React.createElement(Pet),
    React.createElement(Pet),
    React.createElement(Pet),
  ]);
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));