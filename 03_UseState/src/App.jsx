import Counter1 from "./components/Counter1";
import Counter2 from "./components/Counter2";
import Counter3 from "./components/Counter3";
import Restaurant from "./components/Restaurant";
import EditableCounter from "./components/EditableCounter";

function App() {
  return (
    <>
      <Counter1 />
      <Counter2 />
      <Counter3 />
      <Restaurant
        name="Good Food"
        address="Kyiv, Main street 1"
        rating={4.8}
        cuisine="Ukrainian"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWHzMloV9Rl9HoRavqQLsGfcR-U4dL4xGgYQ&s"
      />
      <EditableCounter />
    </>
  );
}

export default App;
