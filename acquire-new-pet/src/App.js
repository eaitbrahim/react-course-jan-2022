import { render } from "react-dom";
import Search from "./Search";

const App = () => {
  return (
    <div>
      <h1>Acquire new Pet</h1>
      <Search />
    </div>
  );
};

render(<App />, document.getElementById("root"));
