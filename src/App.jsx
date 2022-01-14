import "./App.css"
import CamelCase from "./components/CamelCase";
import KebabCase from "./components/KababCase";
import PascalCase from "./components/PascalCase";
import SnakeCase from "./components/SnakeCase";

function App(props) {
  return (
    <div className="container">
      <h1>The most popular ways to combine words to a single string</h1>
      <p>In the world of programming, we don't use spaces between words, and to join these words we have some most popular ways to do it.</p>
      <p>
        <strong>Example:</strong> You want to create a variable expressing the color of a car like <code>car color</code>. <br />
        There is no way to use <code>car color = "red"</code> because almost all the languages don't support that. <br />
        But you can use <code>carColor = "red"</code> instead.
      </p>
      <details>
        <summary>Here is the most popular ways to do it</summary>
        <CamelCase />
        <KebabCase />
        <PascalCase />
        <SnakeCase />
      </details>
    </div>
  )
}

export default App;