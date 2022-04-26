import Greeting from "./componet/Greeting";
import Todo from "./componet/Todo";

function App() {
  return (
    <div>
      <div className="App">
        <Greeting msg="My Todo List" />
      </div>
      <div>
        <Todo title="Learn React" />
        <Todo title="Read React" />
      </div>
    </div>
  );
}

export default App;
